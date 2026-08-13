import 'server-only';

import { after } from 'next/server';

import { and, desc, gt, isNotNull, lt, sql } from 'drizzle-orm';
import { productsTable } from '@/entities/product/model/schema';
import type { HotDealProduct } from '@/entities/product/ui/product-card';
import { db } from '@/shared/api/db';
import { getCache, setCache } from '@/shared/api/upstash-redis/cache';
import { redis } from '@/shared/api/upstash-redis/client';

const DEFAULT_LIMIT = 3;
const CACHE_VERSION = 'v1';

const FRESH_TTL_SECONDS = 60;
const STALE_TTL_SECONDS = 5 * 60;
const REFRESH_LOCK_SECONDS = 15;

type HotDealsCache = {
  cachedAt: number;
  products: HotDealProduct[];
};

function isNumberOrString(value: unknown): value is number | string {
  return typeof value === 'string' || (typeof value === 'number' && Number.isFinite(value));
}

function isOptionalAmount(value: unknown): value is number | string | null | undefined {
  return value === null || value === undefined || isNumberOrString(value);
}

function isHotDealProduct(value: unknown): value is HotDealProduct {
  if (typeof value !== 'object' || value === null) return false;

  const product = value as Record<string, unknown>;

  return (
    typeof product.id === 'string' &&
    typeof product.title === 'string' &&
    typeof product.image === 'string' &&
    isNumberOrString(product.price) &&
    isOptionalAmount(product.salePrice) &&
    isOptionalAmount(product.rating) &&
    typeof product.discountRate === 'number' &&
    Number.isFinite(product.discountRate)
  );
}

function isHotDealsCache(value: unknown): value is HotDealsCache {
  if (typeof value !== 'object' || value === null) return false;

  const cache = value as Record<string, unknown>;

  return (
    typeof cache.cachedAt === 'number' &&
    Number.isFinite(cache.cachedAt) &&
    Array.isArray(cache.products) &&
    cache.products.every(isHotDealProduct)
  );
}

function getCacheKey(limit: number): string {
  return `home:hot-deals:${CACHE_VERSION}:${limit}`;
}

async function queryHotDeals(limit: number): Promise<HotDealProduct[]> {
  const discountRate = sql<number>`
    ((${productsTable.price} - ${productsTable.salePrice}) / ${productsTable.price})::double precision
  `;
  const rows = await db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      image: sql<string>`${productsTable.images}[1]`,
      price: productsTable.price,
      salePrice: productsTable.salePrice,
      rating: productsTable.rating,
      discountRate,
    })
    .from(productsTable)
    .where(
      and(
        isNotNull(productsTable.salePrice),
        lt(productsTable.salePrice, productsTable.price),
        gt(productsTable.price, '0')
      )
    )
    .orderBy(desc(discountRate))
    .limit(limit);
  return rows;
}

async function writeCache(key: string, products: HotDealProduct[]): Promise<void> {
  await setCache({
    key,
    value: {
      cachedAt: Date.now(),
      products,
    },
    ttlSeconds: STALE_TTL_SECONDS,
  });
}

async function refreshCache(limit: number): Promise<void> {
  const cacheKey = getCacheKey(limit);
  const lockKey = `${cacheKey}:refresh-lock`;
  try {
    const lockAcquired = await redis.set(lockKey, '1', {
      ex: REFRESH_LOCK_SECONDS,
      nx: true,
    });
    if (lockAcquired !== 'OK') return;
  } catch {
    return;
  }

  const products = await queryHotDeals(limit);
  await writeCache(cacheKey, products);
}

export async function getHotDeals(limit = DEFAULT_LIMIT): Promise<HotDealProduct[]> {
  const cacheKey = getCacheKey(limit);
  let cachedValue: unknown = null;
  try {
    cachedValue = await getCache<unknown>(cacheKey);
  } catch {
    // Redis is optional; Neon remains the source of truth.
  }

  if (cachedValue) {
    try {
      if (!isHotDealsCache(cachedValue)) throw new Error('Invalid hot deals cache');

      const ageSeconds = (Date.now() - cachedValue.cachedAt) / 1000;
      if (ageSeconds > FRESH_TTL_SECONDS) {
        after(async () => {
          try {
            await refreshCache(limit);
          } catch {
            // The stale value remains available until its Redis TTL expires.
          }
        });
      }

      return cachedValue.products;
    } catch {
      try {
        await redis.del(cacheKey);
      } catch {
        // A malformed value can safely expire without blocking the page.
      }
    }
  }

  const products = await queryHotDeals(limit);

  try {
    await writeCache(cacheKey, products);
  } catch {
    // A Redis outage must not make the home page unavailable.
  }

  return products;
}
