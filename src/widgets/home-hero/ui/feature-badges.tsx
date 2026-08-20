import { Link } from '@/i18n/navigation';

const features = [
  {
    title: 'Free Shipping',
    description: 'Free shipping with discount',
    href: '/shipping',
    icon: '/images/home/delivery-truck.svg',
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    title: 'Great Support 24/7',
    description: 'Instant access to Contact',
    href: '/contact',
    icon: '/images/home/headphones.svg',
    iconWidth: 33.86,
    iconHeight: 36,
  },
  {
    title: '100% Secure Payment',
    description: 'We ensure your money is safe',
    href: '/payment',
    icon: '/images/home/shopping-bag.svg',
    iconWidth: 28.76,
    iconHeight: 36,
  },
  {
    title: 'Money-Back Guarantee',
    description: '30 days money-back',
    href: '/returns',
    icon: '/images/home/package.svg',
    iconWidth: 33.14,
    iconHeight: 36,
  },
];

export function FeatureBadges() {
  return (
    <section aria-label="Shopping benefits">
      <ul className="grid grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {features.map((feature) => (
          <li key={feature.title}>
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
                  {feature.title}
                </span>
                <span className="mt-2 block text-sm leading-normal text-gray-400">
                  {feature.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
