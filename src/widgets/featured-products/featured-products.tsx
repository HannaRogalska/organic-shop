import { type HotDealProduct, type ProductCardProduct } from '@/entities/product/ui/product-card';
import { OrganicFarmBanner } from './ui/organic-farm-banner';
import { FeaturedProductsCarousel } from './ui/featured-products-carousel';
import { ProductCollections } from './ui/product-collections';

type FeaturedProductsProps = {
  products: ProductCardProduct[];
  bestSellers: ProductCardProduct[];
  hotDeals: HotDealProduct[];
  topRated: ProductCardProduct[];
};

export function FeaturedProducts({
  products,
  bestSellers,
  hotDeals,
  topRated,
}: FeaturedProductsProps) {
  return (
    <div className="mx-auto max-w-330">
      <section aria-labelledby="featured-products-title">
        <header className="mx-auto mb-7 max-w-[621px] text-center">
          <p className="text-sm leading-normal font-medium tracking-[0.08em] text-primary uppercase">
            Products
          </p>
          <h2
            id="featured-products-title"
            className="mt-1 text-[32px] leading-[1.075] font-semibold text-gray-900 sm:text-[40px]"
          >
            Our Featured Products
          </h2>
        </header>

        {products.length > 0 ? (
          <FeaturedProductsCarousel products={products} />
        ) : (
          <p className="text-center text-gray-500">No featured products available yet.</p>
        )}
      </section>

      <ProductCollections bestSellers={bestSellers} hotDeals={hotDeals} topRated={topRated} />

      <OrganicFarmBanner />
    </div>
  );
}
