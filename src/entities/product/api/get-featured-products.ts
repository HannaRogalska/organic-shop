import 'server-only';

import { and, desc, eq, sql } from 'drizzle-orm';
import { productsTable, productTranslationsTable } from '@/entities/product/model/schema';
import { isNumberOrString, isOptionalAmount } from '@/entities/product/model/validation';
import type { ProductCardProduct } from '@/entities/product/ui/product-card';
import { db } from '@/shared/api/db';
import { getCachedData } from '@/shared/api/upstash-redis/cache';

const CACHE_VERSION = 'v1';
const FRESH_TTL_SECONDS = 60;
const STALE_TTL_SECONDS = 5 * 60;
const REFRESH_LOCK_SECONDS = 15;
const DEFAULT_LIMIT = 4;

const getCacheKey = (limit: number, locale: string) =>
  `home:featured-products:${CACHE_VERSION}:${locale}:${limit}`;

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

async function queryFeaturedProducts(limit: number, locale: string): Promise<ProductCardProduct[]> {
  return db
    .select({
      id: productsTable.id,
      title: sql<string>`
        coalesce(${productTranslationsTable.title}, ${productsTable.title})
      `,
      image: sql<string>`${productsTable.images}[1]`,
      price: sql<string>`coalesce(${productsTable.salePrice}, ${productsTable.price})`,
      rating: productsTable.rating,
    })
    .from(productsTable)
    .leftJoin(
      productTranslationsTable,
      and(
        eq(productTranslationsTable.productId, productsTable.id),
        eq(productTranslationsTable.locale, locale)
      )
    )
    .orderBy(desc(productsTable.createdAt))
    .limit(limit);
}

export async function getFeaturedProducts(
  limit = DEFAULT_LIMIT,
  locale = 'en'
): Promise<ProductCardProduct[]> {
  return getCachedData({
    key: getCacheKey(limit, locale),
    loadData: () => queryFeaturedProducts(limit, locale),
    isValid: isProductCardProducts,
    freshTtlSeconds: FRESH_TTL_SECONDS,
    staleTtlSeconds: STALE_TTL_SECONDS,
    refreshLockSeconds: REFRESH_LOCK_SECONDS,
  });
}
