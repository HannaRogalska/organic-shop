import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

import { navigation } from '../model/constants';
import { CategoriesMenu } from './categories-menu';

export function MobileNavigation() {
  const t = useTranslations('Header.navigation');
  return (
    <div className="border-t border-gray-100 lg:hidden">
      <details className="group">
        <summary className="flex h-12 cursor-pointer list-none items-center justify-between px-4 text-sm font-medium text-gray-900 marker:content-none">
          {t('menu')}
          <Image
            src="/images/header/chevron.svg"
            alt=""
            width={8}
            height={5}
            className="transition-transform group-open:rotate-180"
          />
        </summary>
        <nav className="border-t border-gray-100 px-4 pb-4" aria-label={t('mobileLabel')}>
          <CategoriesMenu mobile />
          <div>
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="flex py-3 text-sm font-medium text-gray-800 hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </nav>
      </details>
    </div>
  );
}
