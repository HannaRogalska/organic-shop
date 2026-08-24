import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const features = [
  {
    titleKey: 'freeShippingTitle',
    descriptionKey: 'freeShippingDescription',
    href: '/shipping',
    icon: '/images/home/delivery-truck.svg',
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    titleKey: 'supportTitle',
    descriptionKey: 'supportDescription',
    href: '/contact',
    icon: '/images/home/headphones.svg',
    iconWidth: 33.86,
    iconHeight: 36,
  },
  {
    titleKey: 'securePaymentTitle',
    descriptionKey: 'securePaymentDescription',
    href: '/payment',
    icon: '/images/home/shopping-bag.svg',
    iconWidth: 28.76,
    iconHeight: 36,
  },
  {
    titleKey: 'moneyBackTitle',
    descriptionKey: 'moneyBackDescription',
    href: '/returns',
    icon: '/images/home/package.svg',
    iconWidth: 33.14,
    iconHeight: 36,
  },
] as const;

export function FeatureBadges() {
  const t = useTranslations('HomeHero.features');
  return (
    <section aria-label={t('sectionLabel')}>
      <ul className="grid grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {features.map((feature) => (
          <li key={feature.titleKey}>
            <Link
              href={feature.href}
              className="group flex flex-col items-center justify-center gap-4 px-2 py-7 text-center md:flex-row md:text-left xl:justify-start xl:px-0"
            >
              <span className="flex size-18 shrink-0 items-center justify-center rounded-full bg-green-gray-50 transition-colors group-hover:bg-primary group-focus-visible:bg-primary">
                <span
                  aria-hidden="true"
                  className="block bg-primary transition-colors group-hover:bg-white group-focus-visible:bg-white"
                  style={{
                    width: feature.iconWidth,
                    height: feature.iconHeight,
                    maskImage: `url(${feature.icon})`,
                  }}
                />
              </span>

              <span className="min-w-0">
                <span className="block text-lg leading-normal font-semibold text-gray-900">
                  {t(feature.titleKey)}
                </span>
                <span className="mt-2 block text-sm leading-normal text-gray-400">
                  {t(feature.descriptionKey)}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
