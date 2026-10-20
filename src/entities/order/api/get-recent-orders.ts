import 'server-only';

import { desc, eq, sql } from 'drizzle-orm';

import { orderItemsTable, ordersTable } from '@/entities/order/model/schema';
import { db } from '@/shared/api/db';

const DEFAULT_LIMIT = 3;

export type RecentOrder = {
  id: string;
  status: 'pending' | 'paid' | 'shipped';
  totalAmount: string;
  createdAt: Date;
  itemCount: number;
};

function queryUserOrders(userId: string) {
  return db
    .select({
      id: ordersTable.id,
      status: ordersTable.status,
      totalAmount: ordersTable.totalAmount,
      createdAt: ordersTable.createdAt,
      itemCount: sql<number>`
        coalesce(sum(${orderItemsTable.quantity}), 0)::integer
      `,
    })
    .from(ordersTable)
    .leftJoin(orderItemsTable, eq(orderItemsTable.orderId, ordersTable.id))
    .where(eq(ordersTable.userId, userId))
    .groupBy(ordersTable.id, ordersTable.status, ordersTable.totalAmount, ordersTable.createdAt)
    .orderBy(desc(ordersTable.createdAt));
}

export async function getRecentOrders(
  userId: string,
  limit = DEFAULT_LIMIT
): Promise<RecentOrder[]> {
  return queryUserOrders(userId).limit(limit);
}

export async function getUserOrders(userId: string): Promise<RecentOrder[]> {
  return queryUserOrders(userId);
}
