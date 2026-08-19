import type { HotDealProduct, ProductCardProduct } from '@/entities/product/ui/product-card';
import { ProductListCard } from './product-list-card';
import { SaleBanner } from './sale-banner';

type ProductCollectionProps = {
  title: string;
  products: ProductCardProduct[];
};

type ProductCollectionsProps = {
  bestSellers: ProductCardProduct[];
  hotDeals: HotDealProduct[];
  topRated: ProductCardProduct[];
};

function ProductCollection({ title, products }: ProductCollectionProps) {
  const titleId = `${title.toLowerCase().replaceAll(' ', '-')}-title`;

  return (
    <section aria-labelledby={titleId}>
      <h3 id={titleId} className="mb-4 text-2xl leading-[1.5] font-medium text-gray-900">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductListCard key={`${title}-${product.id}`} product={product} />
        ))}
      </div>
    </section>
  );
}

export function ProductCollections({ bestSellers, hotDeals, topRated }: ProductCollectionsProps) {
  return (
    <section
      className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
      aria-label="Product collections"
    >
      <ProductCollection title="Hot Deals" products={hotDeals} />
      <ProductCollection title="Best Seller" products={bestSellers} />
      <ProductCollection title="Top Rated" products={topRated} />
      <SaleBanner
        eyebrow="Hot Sale"
        title={
          <p className="mt-3 text-[32px] leading-[1.2] text-gray-900">
            <strong className="font-semibold">Save 37%</strong> on
            <br />
            Every Order
          </p>
        }
        image="/images/product/yellow-products-sale.png"
        imageSizes="(min-width: 1280px) 312px, (min-width: 640px) 50vw, 100vw"
        className="min-h-[423px]"
        contentClassName="px-4 pt-6"
        imageClassName="object-cover"
        linkSize="medium"
        linkClassName="mt-5"
        eagerImage
      />
    </section>
  );
}
