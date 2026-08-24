'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import { AUTOPLAY_DELAY, heroSlides } from '../model/constants';
import { ShopNowLink } from '@/shared/ui/shop-now-link/shop-now-link';
import { useTranslations } from 'next-intl';

export function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay] = useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );
  const t = useTranslations('HomeHero.banner');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [autoplay]);

  const updateSelectedSlide = useCallback(() => {
    if (!emblaApi) return;
    setActiveSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', updateSelectedSlide);
    emblaApi.on('reInit', updateSelectedSlide);

    return () => {
      emblaApi.off('select', updateSelectedSlide);
      emblaApi.off('reInit', updateSelectedSlide);
    };
  }, [emblaApi, updateSelectedSlide]);

  const selectSlide = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      autoplay.reset();
    },
    [autoplay, emblaApi]
  );

  return (
    <section
      aria-roledescription={t('carouselRole')}
      aria-label={t('carouselLabel')}
      className="relative min-h-105 overflow-hidden rounded-xl bg-green-gray-900 sm:min-h-120 lg:min-h-140"
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {heroSlides.map((slide, index) => (
            <article
              key={slide.image}
              aria-roledescription={t('slideRole')}
              aria-label={t('slideLabel', {
                current: index + 1,
                total: heroSlides.length,
              })}
              aria-hidden={activeSlide !== index}
              className="relative min-h-105 min-w-0 flex-[0_0_100%] sm:min-h-120 lg:min-h-140"
            >
              <Image
                src={slide.image}
                alt=""
                fill
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                sizes="(min-width: 1320px) 1320px, 100vw"
                className={`object-cover ${
                  index === 0 ? 'object-[62%_center] sm:object-center' : 'object-center'
                }`}
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/10 to-transparent" />

              <div className="relative z-10 flex min-h-105 flex-col items-start justify-center px-6 py-12 sm:min-h-120 sm:px-10 lg:min-h-140 lg:px-12">
                <div className="flex flex-col gap-5">
                  {index === 0 ? (
                    <h1 className="max-w-120 text-4xl leading-[1.2] font-semibold text-white sm:text-5xl">
                      {t(slide.title[0])}
                      <br />
                      {t(slide.title[1])}
                    </h1>
                  ) : (
                    <h2 className="max-w-120 text-4xl leading-[1.2] font-semibold text-white sm:text-5xl">
                      {t(slide.title[0])}
                      <br />
                      {t(slide.title[1])}
                    </h2>
                  )}

                  <p className="border-l-2 border-primary pl-3 text-2xl leading-[1.2] font-medium text-white/60 uppercase">
                    {t(slide.eyebrow)}
                    <br />
                    <span className="text-white">{slide.discount}</span> {t('off')}
                  </p>
                </div>
                <ShopNowLink tabIndex={activeSlide === index ? 0 : -1} color="primary" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-6 z-10 flex items-center gap-2 sm:left-10 lg:left-12"
        role="group"
        aria-label={t('controlsLabel')}
      >
        {heroSlides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={t('showSlide', {
              number: index + 1,
            })}
            aria-current={activeSlide === index ? 'true' : undefined}
            onClick={() => selectSlide(index)}
            className={`h-2 cursor-pointer rounded-full  ${
              activeSlide === index ? 'w-6 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
          >
            <span className="sr-only">{index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
