import { ProductCard, type ProductCardProduct } from '@/entities/product/ui/product-card';
import { OrganicFarmBanner } from './ui/organic-farm-banner';
import { ProductCollections } from './ui/product-collections';
import { SaleBanner } from './ui/sale-banner';

type FeaturedProductsProps = {
  products: ProductCardProduct[];
};

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products available yet.</p>;
  }

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

        <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <SaleBanner
            eyebrow="Summer Sale"
            title={
              <p className="mt-1 text-3xl leading-[1.2] font-semibold text-primary">75% off</p>
            }
            image="/images/product/sale-bag.png"
            imageSizes="(min-width: 1448px) 254px, (min-width: 1280px) calc((100vw - 176px) / 5), (min-width: 1024px) calc((100vw - 164px) / 4), (min-width: 768px) calc((100vw - 88px) / 3), (min-width: 640px) calc((100vw - 76px) / 2), (min-width: 520px) calc((100vw - 44px) / 2), calc(100vw - 32px)"
            className="min-h-82"
            contentClassName="px-5 pt-6"
            eagerImage
          />
          {products.map((product) => (
            <ProductCard key={product.id} product={product} className="max-w-none" />
          ))}
        </div>
      </section>

      <ProductCollections products={products} />

      <OrganicFarmBanner />
    </div>
  );
}
