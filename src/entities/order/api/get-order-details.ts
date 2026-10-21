import 'server-only';

import { and, eq, sql } from 'drizzle-orm';

import { orderItemsTable, ordersTable } from '@/entities/order/model/schema';
import { productsTable, productTranslationsTable } from '@/entities/product/model/schema';
import { db } from '@/shared/api/db';

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type OrderItemDetails = {
  id: string;
  productId: string;
  title: string;
  image: string;
  quantity: number;
  singlePrice: string;
};

export type OrderDetails = {
  id: string;
  status: 'pending' | 'paid' | 'shipped';
  totalAmount: string;
  createdAt: Date;
  items: OrderItemDetails[];
};

async function queryOrderItems(orderId: string, locale: string): Promise<OrderItemDetails[]> {
  return db
    .select({
      id: orderItemsTable.id,
      productId: orderItemsTable.productId,
      title: sql<string>`
        coalesce(${productTranslationsTable.title}, ${productsTable.title})
      `,
      image: sql<string>`${productsTable.images}[1]`,
      quantity: orderItemsTable.quantity,
      singlePrice: orderItemsTable.singlePrice,
    })
    .from(orderItemsTable)
    .innerJoin(productsTable, eq(orderItemsTable.productId, productsTable.id))
    .leftJoin(
      productTranslationsTable,
      and(
        eq(productTranslationsTable.productId, productsTable.id),
        eq(productTranslationsTable.locale, locale)
      )
    )
    .where(eq(orderItemsTable.orderId, orderId));
}

export async function getOrderDetails(
  orderId: string,
  userId: string,
  locale: string
): Promise<OrderDetails | null> {
  if (!UUID_PATTERN.test(orderId)) {
    return null;
  }

  const [order] = await db
    .select({
      id: ordersTable.id,
      status: ordersTable.status,
      totalAmount: ordersTable.totalAmount,
      createdAt: ordersTable.createdAt,
    })
    .from(ordersTable)
    .where(and(eq(ordersTable.id, orderId), eq(ordersTable.userId, userId)))
    .limit(1);

  if (!order) {
    return null;
  }

  const items = await queryOrderItems(order.id, locale);

  return {
    ...order,
    items,
  };
}
