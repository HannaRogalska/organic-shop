import { index, integer, numeric, pgEnum, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { usersTable } from '@/entities/user/model/schema';
import { productsTable } from '@/entities/product/model/schema';

export const orderStatusEnum = pgEnum('order_status', ['pending', 'paid', 'shipped']);

export const ordersTable = pgTable('orders', {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid()
    .references(() => usersTable.id, { onDelete: 'restrict' })
    .notNull(),
  status: orderStatusEnum().default('pending').notNull(),
  totalAmount: numeric({ precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp()
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const orderItemsTable = pgTable(
  'order_items',
  {
    id: uuid().defaultRandom().primaryKey(),
    orderId: uuid()
      .references(() => ordersTable.id, { onDelete: 'cascade' })
      .notNull(),
    productId: uuid()
      .references(() => productsTable.id, { onDelete: 'restrict' })
      .notNull(),
    quantity: integer().notNull(),
    singlePrice: numeric({ precision: 10, scale: 2 }).notNull(),
  },
  (table) => [
    index('order_items_order_id_idx').on(table.orderId),
    index('order_items_product_id_idx').on(table.productId),
  ]
);
