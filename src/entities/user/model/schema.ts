import { relations } from 'drizzle-orm';
import { uuid, pgTable, varchar, timestamp, text, pgEnum } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', ['admin', 'customer']);

export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  email: varchar({ length: 255 }).notNull().unique(),
  passwordHash: text().notNull(),
  role: userRoleEnum().default('customer').notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const addressesTable = pgTable('addresses', {
  id: uuid().defaultRandom().primaryKey(),
  userId: uuid()
    .references(() => usersTable.id, { onDelete: 'cascade' })
    .notNull(),
  title: varchar({ length: 100 }).default('Home').notNull(),
  firstName: varchar({ length: 100 }).notNull(),
  lastName: varchar({ length: 100 }).notNull(),
  streetAddress: varchar({ length: 255 }).notNull(),
  city: varchar({ length: 100 }).notNull(),
  state: varchar({ length: 100 }),
  zipCode: varchar({ length: 20 }).notNull(),
  phone: varchar({ length: 30 }).notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  addresses: many(addressesTable),
}));

export const addressesRelations = relations(addressesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [addressesTable.userId],
    references: [usersTable.id],
  }),
}));
