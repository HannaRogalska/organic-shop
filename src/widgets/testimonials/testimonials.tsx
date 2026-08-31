'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TestimonialCard } from '@/entities/testimonial/ui/testimonial-card';
import { TESTIMONIALS } from './model/constants';

export function Testimonials() {
  const t = useTranslations('Testimonials');
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const syncControls = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', syncControls).on('reInit', syncControls);
    return () => {
      emblaApi.off('select', syncControls).off('reInit', syncControls);
    };
  }, [emblaApi, syncControls]);

  return (
    <section
      className="relative left-1/2 w-screen -translate-x-1/2 bg-gray-50 px-4 py-15 sm:px-8"
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-330">
        <header className="mx-auto mb-9 max-w-156 text-center">
          <p className="text-sm leading-7 font-medium tracking-[0.02em] text-primary uppercase">
            {t('eyebrow')}
          </p>
          <h2
            id="testimonials-title"
            className="mt-2 text-[32px] leading-[1.2] font-semibold text-gray-900 sm:text-4xl"
          >
            {t('title')}
          </h2>
        </header>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-6 flex touch-pan-y">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-0 flex-[0_0_100%] pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3 lg:absolute lg:top-15 lg:right-[max(4rem,calc((100vw-82.5rem)/2))] lg:mt-0">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label={t('previous')}
            className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-background text-xl text-gray-900 transition-colors hover:border-primary hover:bg-primary hover:text-background disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-background disabled:hover:text-gray-900"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label={t('next')}
            className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-background text-xl text-gray-900 transition-colors hover:border-primary hover:bg-primary hover:text-background disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-background disabled:hover:text-gray-900"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
