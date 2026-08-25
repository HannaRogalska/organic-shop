import { useTranslations } from 'next-intl';
import type { HotDealProduct, ProductCardProduct } from '@/entities/product/ui/product-card';
import { ProductListCard } from './product-list-card';
import { SaleBanner } from './sale-banner';

type ProductCollectionProps = {
  id: string;
  title: string;
  products: ProductCardProduct[];
};

type ProductCollectionsProps = {
  bestSellers: ProductCardProduct[];
  hotDeals: HotDealProduct[];
  topRated: ProductCardProduct[];
};

function ProductCollection({ id, title, products }: ProductCollectionProps) {
  const titleId = `${id}-title`;

  return (
    <section aria-labelledby={titleId}>
      <h3 id={titleId} className="mb-4 text-2xl leading-[1.5] font-medium text-gray-900">
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductListCard key={`${id}-${product.id}`} product={product} />
        ))}
      </div>
    </section>
  );
}

export function ProductCollections({ bestSellers, hotDeals, topRated }: ProductCollectionsProps) {
  const t = useTranslations('FeaturedProducts.collections');
  return (
    <section
      className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
      aria-label={t('sectionLabel')}
    >
      <ProductCollection id="hot-deals" title={t('hotDeals')} products={hotDeals} />
      <ProductCollection id="best-sellers" title={t('bestSeller')} products={bestSellers} />
      <ProductCollection id="top-rated" title={t('topRated')} products={topRated} />
      <SaleBanner
        eyebrow={t('hotSale')}
        title={
          <p className="mt-3 text-[32px] leading-[1.2] text-gray-900">
            {t.rich('saleTitle', {
              strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
              br: () => <br />,
            })}
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
