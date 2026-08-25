import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { OrganicFarmVideoDialog } from './organic-farm-video-dialog';

export function OrganicFarmBanner() {
  const t = useTranslations('FeaturedProducts.organicFarm');
  return (
    <section
      className="relative mt-15 min-h-[396px] overflow-hidden"
      aria-labelledby="organic-farm-title"
    >
      <Image
        src="/images/product/organic-farm-background.jpg"
        alt={t('imageAlt')}
        fill
        sizes="(min-width: 1448px) 1320px, calc(100vw - 32px)"
        loading="lazy"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-green-gray-900/70" />
      <div className="relative z-10 flex min-h-[396px] flex-col items-center justify-center px-5 text-center">
        <h2
          id="organic-farm-title"
          className="max-w-[495px] text-3xl leading-[1.2] font-semibold text-white sm:text-4xl"
        >
          {t('title')}
        </h2>
        <OrganicFarmVideoDialog />
      </div>
    </section>
  );
}
