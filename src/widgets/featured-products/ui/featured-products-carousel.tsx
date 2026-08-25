'use client';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard, type ProductCardProduct } from '@/entities/product/ui/product-card';
import { SaleBanner } from './sale-banner';

export function FeaturedProductsCarousel({ products }: { products: ProductCardProduct[] }) {
  const t = useTranslations('FeaturedProducts.carousel');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const syncControls = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const frameId = requestAnimationFrame(syncControls);
    emblaApi.on('select', syncControls).on('reInit', syncControls);
    return () => {
      cancelAnimationFrame(frameId);
      emblaApi.off('select', syncControls).off('reInit', syncControls);
    };
  }, [emblaApi, syncControls]);

  return (
    <div>
      <div
        ref={emblaRef}
        className="mx-auto w-66 max-w-full overflow-hidden sm:w-[540px] lg:w-[816px] xl:w-[1092px]"
      >
        <div className="flex gap-3">
          <div className="min-w-0 flex-[0_0_264px]">
            <SaleBanner
              eyebrow={t('saleEyebrow')}
              title={
                <p className="mt-1 text-3xl leading-[1.2] font-semibold text-primary">
                  {t('saleDiscount')}
                </p>
              }
              image="/images/product/sale-bag.png"
              imageSizes="264px"
              className="min-h-82"
              contentClassName="px-5 pt-6"
              eagerImage
            />
          </div>

          {products.map((product) => (
            <div key={product.id} className="min-w-0 flex-[0_0_264px]">
              <ProductCard product={product} className="max-w-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label={t('previous')}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-background text-xl text-gray-900 transition-colors hover:border-primary hover:bg-primary hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          aria-label={t('next')}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-background text-xl text-gray-900 transition-colors hover:border-primary hover:bg-primary hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
