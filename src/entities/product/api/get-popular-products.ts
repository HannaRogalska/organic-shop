import 'server-only';

import { after } from 'next/server';
import { desc, eq, sql } from 'drizzle-orm';
import { orderItemsTable, ordersTable } from '@/entities/order/model/schema';
import { productsTable } from '@/entities/product/model/schema';
import type { ProductCardProduct } from '@/entities/product/ui/product-card';
import { db } from '@/shared/api/db';
import { redis } from '@/shared/api/redis/client';

const CACHE_VERSION = 'v1';
const FRESH_TTL_SECONDS = 60;
const STALE_TTL_SECONDS = 5 * 60;
const REFRESH_LOCK_SECONDS = 15;
const DEFAULT_LIMIT = 5;

type PopularProductsCache = {
  cachedAt: number;
  products: ProductCardProduct[];
};

const getCacheKey = (limit: number) => `home:popular-products:${CACHE_VERSION}:${limit}`;

async function queryPopularProducts(limit: number): Promise<ProductCardProduct[]> {
  const soldQuantity = sql<number>`
    coalesce(
      sum(${orderItemsTable.quantity})
        filter (where ${ordersTable.status} in ('paid', 'shipped')),
      0
    )
  `;

  const rows = await db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      image: sql<string>`${productsTable.images}[1]`,
      price: sql<string>`coalesce(${productsTable.salePrice}, ${productsTable.price})`,
      rating: productsTable.rating,
      soldQuantity,
    })
    .from(productsTable)
    .leftJoin(orderItemsTable, eq(orderItemsTable.productId, productsTable.id))
    .leftJoin(ordersTable, eq(ordersTable.id, orderItemsTable.orderId))
    .groupBy(productsTable.id)
    .orderBy(desc(soldQuantity), desc(productsTable.rating), desc(productsTable.createdAt))
    .limit(limit);

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    image: row.image,
    price: row.price,
    rating: row.rating,
  }));
}

async function writeCache(key: string, products: ProductCardProduct[]) {
  const value: PopularProductsCache = {
    cachedAt: Date.now(),
    products,
  };

  await redis.set(key, JSON.stringify(value), { ex: STALE_TTL_SECONDS });
}

async function refreshCache(limit: number) {
  const cacheKey = getCacheKey(limit);
  const lockKey = `${cacheKey}:refresh-lock`;
  let lockAcquired: 'OK' | null;

  try {
    lockAcquired = await redis.set(lockKey, '1', {
      ex: REFRESH_LOCK_SECONDS,
      nx: true,
    });
  } catch {
    return;
  }

  if (!lockAcquired) return;

  const products = await queryPopularProducts(limit);
  await writeCache(cacheKey, products);
}

export async function getPopularProducts(limit = DEFAULT_LIMIT): Promise<ProductCardProduct[]> {
  const cacheKey = getCacheKey(limit);
  let cachedValue: string | null = null;

  try {
    cachedValue = await redis.get(cacheKey);
  } catch {
    // Redis is optional; Neon remains the source of truth.
  }

  if (cachedValue) {
    try {
      const cached = JSON.parse(cachedValue) as PopularProductsCache;
      if (!Array.isArray(cached.products) || typeof cached.cachedAt !== 'number') {
        throw new Error('Invalid popular products cache');
      }

      const ageSeconds = (Date.now() - cached.cachedAt) / 1000;
      if (ageSeconds > FRESH_TTL_SECONDS) {
        after(async () => {
          try {
            await refreshCache(limit);
          } catch {
            // The stale value remains available until its Redis TTL expires.
          }
        });
      }

      return cached.products;
    } catch {
      try {
        await redis.del(cacheKey);
      } catch {
        // A malformed value can safely expire without blocking the page.
      }
    }
  }

  const products = await queryPopularProducts(limit);
  try {
    await writeCache(cacheKey, products);
  } catch {
    // A Redis outage must not make the home page unavailable.
  }

  return products;
}
