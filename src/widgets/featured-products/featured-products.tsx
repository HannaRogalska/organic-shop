import Image from 'next/image';
import { ProductCard, type ProductCardProduct } from '@/entities/product/ui/product-card';
import { ShopNowLink } from '@/shared/ui/shop-now-link/shop-now-link';

type FeaturedProductsProps = {
  products: ProductCardProduct[];
};

function SaleBanner() {
  return (
    <article className="relative min-h-82 overflow-hidden text-center">
      <div className="relative z-10 px-5 pt-6">
        <p className="text-xs leading-normal font-medium tracking-wide text-gray-900 uppercase">
          Summer Sale
        </p>
        <p className="mt-1 text-3xl leading-[1.2] font-semibold text-primary">75% off</p>
        <ShopNowLink />
      </div>

      <Image
        src="/images/product/sale-bag.png"
        alt=""
        fill
        sizes="265px"
        loading="eager"
        className="object-contain object-bottom"
      />
    </article>
  );
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products available yet.</p>;
  }

  return (
    <section className="mx-auto max-w-330" aria-labelledby="featured-products-title">
      <header className="mx-auto mb-7 max-w-[621px] text-center">
        <p className="text-sm leading-normal font-medium tracking-[0.08em] text-primary uppercase">
          Products
        </p>
        <h1
          id="featured-products-title"
          className="mt-1 text-[32px] leading-[1.075] font-semibold text-gray-900 sm:text-[40px]"
        >
          Our Featured Products
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <SaleBanner />
        {products.map((product) => (
          <ProductCard key={product.id} product={product} eagerImage className="max-w-none" />
        ))}
      </div>
    </section>
  );
}
