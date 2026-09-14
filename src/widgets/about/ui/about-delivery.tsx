import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ShopNowLink } from '@/shared/ui/shop-now-link/shop-now-link';

const BENEFIT_KEYS = ['firstBenefit', 'secondBenefit', 'thirdBenefit'] as const;

export function AboutDelivery() {
  const t = useTranslations('AboutPage.delivery');

  return (
    <section className="overflow-hidden bg-background">
      <div className="mx-auto grid w-full max-w-330 items-center gap-10 px-4 sm:px-8 xl:grid-cols-[5fr_7fr] xl:px-0">
        <div className="order-2 py-16 xl:order-1 xl:py-24">
          <h2 className="text-center text-4xl leading-tight font-semibold text-green-gray-900 sm:text-5xl xl:text-left">
            {t('title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg">
            {t('description')}
          </p>
          <ul className="mt-6 space-y-4">
            {BENEFIT_KEYS.map((key) => (
              <li key={key} className="flex items-center gap-3 text-base text-gray-600">
                <span
                  className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-xs text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
          <ShopNowLink color="primary" className="mt-8" />
        </div>

        <Image
          src="/images/about/delivery.png"
          alt={t('imageAlt')}
          width={895}
          height={606}
          sizes="(min-width: 1280px) 55vw, 100vw"
          className="order-1 h-auto w-full self-end object-contain xl:order-2"
        />
      </div>
    </section>
  );
}
