import ws from 'ws';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { categoriesTable, productsTable } from '@/entities/product/model/schema';
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
    await db.insert(productsTable).values(productToInsert);
  } catch (error) {
    console.error('Error somthing wrong', error);
  } finally {
    await pool.end();
  }
};
main();
