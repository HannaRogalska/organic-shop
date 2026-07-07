import { index, integer, numeric, pgEnum, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { usersTable } from '@/entities/user/model/schema';
import { productsTable } from '@/entities/product/model/schema';
import { relations } from 'drizzle-orm';

export const orderStatusEnum = pgEnum('order_status', ['pending', 'paid', 'shipped']);

export const ordersTable = pgTable(
  'orders',
  {
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
  },
  (table) => [index('orders_user_id_idx').on(table.userId)]
);

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

export const ordersRelations = relations(ordersTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [ordersTable.userId],
    references: [usersTable.id],
  }),
  items: many(orderItemsTable),
}));

export const orderItemsRelations = relations(orderItemsTable, ({ one, many }) => ({
  order: one(ordersTable, {
    fields: [orderItemsTable.orderId],
    references: [ordersTable.id],
  }),
  product: one(productsTable, {
    fields: [orderItemsTable.productId],
    references: [productsTable.id],
  }),
}));
