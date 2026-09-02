import { relations, sql } from 'drizzle-orm';
import {
  type AnyPgColumn,
  pgTable,
  uniqueIndex,
  uuid,
  varchar,
  timestamp,
  text,
  integer,
  numeric,
  index,
  check,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const categoriesTable = pgTable(
  'categories',
  {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    slug: varchar({ length: 255 }).notNull().unique(),
    parentId: uuid().references((): AnyPgColumn => categoriesTable.id, { onDelete: 'cascade' }),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp()
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    uniqueIndex('categories_name_lower_idx').on(sql`lower(${table.name})`),
    uniqueIndex('categories_slug_lower_idx').on(sql`lower(${table.slug})`),
  ]
);

export const productsTable = pgTable(
  'products',
  {
    id: uuid().defaultRandom().primaryKey(),
    categoryId: uuid()
      .references(() => categoriesTable.id, { onDelete: 'restrict' })
      .notNull(),
    title: varchar({ length: 255 }).notNull(),
    slug: varchar({ length: 255 }).notNull(),
    description: text(),
    stock: integer().default(0).notNull(),
    price: numeric({ precision: 10, scale: 2 }).notNull(),
    salePrice: numeric({ precision: 10, scale: 2 }),
    rating: numeric({ precision: 3, scale: 2 }),
    images: text().array().notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp()
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    uniqueIndex('products_title_lower_idx').on(sql`lower(${table.title})`),
    uniqueIndex('products_slug_lower_idx').on(sql`lower(${table.slug})`),
    index('products_category_id_idx').on(table.categoryId),
    index('products_price_idx').on(table.price),
    check('product_stock_check', sql`${table.stock} >= 0`),
  ]
);

export const productTranslationsTable = pgTable(
  'product_translations',
  {
    productId: uuid()
      .references(() => productsTable.id, { onDelete: 'cascade' })
      .notNull(),
    locale: varchar({ length: 5 }).notNull(),
    title: varchar({ length: 255 }).notNull(),
    description: text(),
    slug: varchar({ length: 255 }).notNull(),
  },
  (table) => [
    primaryKey({
      columns: [table.productId, table.locale],
    }),
    uniqueIndex('product_translations_locale_slug_idx').on(table.locale, sql`lower(${table.slug})`),
  ]
);

export const categoriesRelations = relations(categoriesTable, ({ many, one }) => ({
  parent: one(categoriesTable, {
    fields: [categoriesTable.parentId],
    references: [categoriesTable.id],
    relationName: 'category_subcategories',
  }),
  subcategories: many(categoriesTable, {
    relationName: 'category_subcategories',
  }),
}));
export const productsRelations = relations(productsTable, ({ one }) => ({
  category: one(categoriesTable, {
    fields: [productsTable.categoryId],
    references: [categoriesTable.id],
  }),
}));
