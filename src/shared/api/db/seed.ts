import ws from 'ws';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import {
  categoriesTable,
  productsTable,
  productTranslationsTable,
} from '@/entities/product/model/schema';
import { mockCategories, mockProducts } from '@/shared/api/db/data/mock-data';

if (typeof WebSocket === 'undefined') {
  neonConfig.webSocketConstructor = ws;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 1,
});
const db = drizzle({ client: pool, casing: 'snake_case' });

export const main = async () => {
  try {
    await db.delete(productsTable);
    await db.delete(categoriesTable);

    const insertedCategories = await db.insert(categoriesTable).values(mockCategories).returning();
    const productToInsert = mockProducts.map((product) => {
      const matchedCategory = insertedCategories.find((cat) => cat.slug === product.categorySlug);
      if (!matchedCategory) {
        throw new Error(`Category not founded`);
      }

      return {
        title: product.title,
        slug: product.slug,
        description: product.description,
        stock: product.stock,
        price: product.price,
        salePrice: product.salePrice,
        rating: product.rating,
        images: product.images,
        categoryId: matchedCategory.id,
      };
    });
    const insertedProducts = await db.insert(productsTable).values(productToInsert).returning();
    const translationsToInsert = mockProducts.flatMap((product) => {
      const insertedProduct = insertedProducts.find((item) => item.slug === product.slug);

      if (!insertedProduct) {
        return [];
      }

      const englishTranslation = {
        productId: insertedProduct.id,
        locale: 'en',
        title: product.title,
        slug: product.slug,
        description: product.description,
      };

      const polishTranslation = product.translations?.pl;

      if (!polishTranslation) {
        return [englishTranslation];
      }

      return [
        englishTranslation,
        {
          productId: insertedProduct.id,
          locale: 'pl',
          title: polishTranslation.title,
          slug: polishTranslation.slug,
          description: polishTranslation.description,
        },
      ];
    });
    if (translationsToInsert.length > 0) {
      await db.insert(productTranslationsTable).values(translationsToInsert);
    }
  } catch (error) {
    console.error('Error somthing wrong', error);
  } finally {
    await pool.end();
  }
};
main();
