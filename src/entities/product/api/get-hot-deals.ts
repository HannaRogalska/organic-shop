import 'server-only';

import { and, desc, gt, isNotNull, lt, sql } from 'drizzle-orm';
import { productsTable } from '@/entities/product/model/schema';
import type { HotDealProduct } from '@/entities/product/ui/product-card';
import { db } from '@/shared/api/db';

const DEFAULT_LIMIT = 3;

export async function getHotDeals(limit = DEFAULT_LIMIT): Promise<HotDealProduct[]> {
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
