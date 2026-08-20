import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

import { navigation } from '../model/constants';
import { CategoriesMenu } from './categories-menu';

export function MainNavBar() {
  const t = useTranslations('Header.navigation');
  return (
    <nav className="hidden bg-gray-900 lg:block" aria-label={t('label')}>
      <div className="mx-auto flex h-14 w-full max-w-330 items-center justify-between px-6 xl:px-0">
        <div className="flex h-full items-center gap-8">
          <CategoriesMenu />
          <div className="flex items-center gap-7">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="flex items-center gap-3 text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        </div>
        <a
          href="tel:+12195550114"
          className="flex items-center gap-2 text-sm font-medium text-white"
        >
          <Image src="/images/header/phone.svg" alt="" width={24} height={24} />
          (219) 555-0114
        </a>
      </div>
    </nav>
  );
}
