import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ABOUT_FEATURES } from '../model/constants';

export function AboutBenefits() {
  const t = useTranslations('AboutPage.benefits');

  return (
    <section className="bg-background">
      <div className="flex w-full flex-col items-center xl:flex-row">
        <Image
          src="/images/about/organic-farmer.png"
          loading="eager"
          alt={t('imageAlt')}
          width={1129}
          height={685}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full shrink-0 object-contain xl:w-3/5"
        />

        <div className="relative z-10 w-full px-4 py-12 sm:px-8 xl:w-2/5 xl:px-0 xl:py-20 xl:pr-12 2xl:-ml-44">
          <h2 className="text-4xl leading-tight font-semibold text-green-gray-900 sm:text-5xl">
            {t('title')}
          </h2>

          <p className="mt-5 text-base leading-normal text-gray-500">{t('description')}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {ABOUT_FEATURES.map((feature) => (
              <div key={feature.titleKey} className="flex items-start gap-4">
                <span className="flex size-18 shrink-0 items-center justify-center rounded-full bg-green-gray-50">
                  <span className="relative size-10">
                    <Image
                      src={feature.icon}
                      alt=""
                      fill
                      sizes="40px"
                      aria-hidden="true"
                      className="object-contain"
                    />
                  </span>
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg leading-normal font-medium text-gray-900">
                    {t(`features.${feature.titleKey}`)}
                  </h3>

                  <p className="mt-1.5 text-sm leading-normal text-gray-500">
                    {t(`features.${feature.descriptionKey}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
