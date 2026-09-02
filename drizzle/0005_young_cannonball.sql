CREATE TABLE "product_translations" (
	"product_id" uuid NOT NULL,
	"locale" varchar(5) NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"slug" varchar(255) NOT NULL,
	CONSTRAINT "product_translations_product_id_locale_pk" PRIMARY KEY("product_id","locale")
);
--> statement-breakpoint
ALTER TABLE "product_translations" ADD CONSTRAINT "product_translations_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "product_translations_locale_slug_idx" ON "product_translations" USING btree ("locale","slug");

--> statement-breakpoint
INSERT INTO "product_translations" (
  "product_id",
  "locale",
  "title",
  "description",
  "slug"
)
SELECT
  "id",
  'en',
  "title",
  "description",
  "slug"
FROM "products";
