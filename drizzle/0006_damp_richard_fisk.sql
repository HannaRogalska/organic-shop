DROP INDEX "product_translations_locale_slug_idx";--> statement-breakpoint
CREATE UNIQUE INDEX "product_translations_locale_slug_idx" ON "product_translations" USING btree ("locale",lower("slug"));