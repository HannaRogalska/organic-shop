import 'server-only';

import { and, desc, gt, isNotNull, lt, sql } from 'drizzle-orm';
import { productsTable } from '@/entities/product/model/schema';
import { isNumberOrString, isOptionalAmount } from '@/entities/product/model/validation';
import type { HotDealProduct } from '@/entities/product/ui/product-card';
import { db } from '@/shared/api/db';
import { getCachedData } from '@/shared/api/upstash-redis/cache';

const DEFAULT_LIMIT = 3;
const CACHE_VERSION = 'v1';

const FRESH_TTL_SECONDS = 60;
const STALE_TTL_SECONDS = 5 * 60;
const REFRESH_LOCK_SECONDS = 15;

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

function isHotDealProducts(value: unknown): value is HotDealProduct[] {
  return Array.isArray(value) && value.every(isHotDealProduct);
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

export async function getHotDeals(limit = DEFAULT_LIMIT): Promise<HotDealProduct[]> {
  return getCachedData({
    key: getCacheKey(limit),
    loadData: () => queryHotDeals(limit),
    isValid: isHotDealProducts,
    freshTtlSeconds: FRESH_TTL_SECONDS,
    staleTtlSeconds: STALE_TTL_SECONDS,
    refreshLockSeconds: REFRESH_LOCK_SECONDS,
  });
}
