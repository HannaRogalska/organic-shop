import 'server-only';

import { desc, eq, sql } from 'drizzle-orm';
import { orderItemsTable, ordersTable } from '@/entities/order/model/schema';
import { productsTable } from '@/entities/product/model/schema';
import { isNumberOrString, isOptionalAmount } from '@/entities/product/model/validation';
import type { ProductCardProduct } from '@/entities/product/ui/product-card';
import { db } from '@/shared/api/db';
import { getCachedData } from '@/shared/api/upstash-redis/cache';

const CACHE_VERSION = 'v1';
const FRESH_TTL_SECONDS = 60;
const STALE_TTL_SECONDS = 5 * 60;
const REFRESH_LOCK_SECONDS = 15;
const DEFAULT_LIMIT = 5;

const getCacheKey = (limit: number) => `home:popular-products:${CACHE_VERSION}:${limit}`;

function isProductCardProduct(value: unknown): value is ProductCardProduct {
  if (typeof value !== 'object' || value === null) return false;

  const product = value as Record<string, unknown>;

  return (
    typeof product.id === 'string' &&
    typeof product.title === 'string' &&
    typeof product.image === 'string' &&
    isNumberOrString(product.price) &&
    isOptionalAmount(product.salePrice) &&
    isOptionalAmount(product.rating)
  );
}

function isProductCardProducts(value: unknown): value is ProductCardProduct[] {
  return Array.isArray(value) && value.every(isProductCardProduct);
}

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

export async function getPopularProducts(limit = DEFAULT_LIMIT): Promise<ProductCardProduct[]> {
  return getCachedData({
    key: getCacheKey(limit),
    loadData: () => queryPopularProducts(limit),
    isValid: isProductCardProducts,
    freshTtlSeconds: FRESH_TTL_SECONDS,
    staleTtlSeconds: STALE_TTL_SECONDS,
    refreshLockSeconds: REFRESH_LOCK_SECONDS,
  });
}
