import { CurrencySelect } from './currency-select';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSelect } from '@/widgets/header/ui/language-select';

export function HeaderTopBar() {
  const t = useTranslations('Header.topBar');
  return (
    <div className="border-b border-gray-100">
      <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-2 px-4 py-3 text-center text-xs text-gray-600 lg:h-13 lg:flex-row lg:justify-between lg:gap-0 lg:px-6 lg:py-0 lg:text-left xl:px-0">
        <p className="flex w-full items-start justify-center gap-2 lg:w-auto lg:justify-start">
          <Image src="/images/header/map-pin.svg" alt="" width={15} height={18} />
          {t('storeLocation')}
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:w-auto lg:flex-nowrap lg:justify-start lg:gap-5">
          <LanguageSelect />
          <label className="flex items-center gap-1.5">
            <span className="sr-only">{t('currency')}</span>
            <CurrencySelect />
          </label>
          <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
          <div className="flex gap-1">
            <Link href="/sign-in" className="hover:text-primary">
              {t('signIn')}
            </Link>
            <span>/</span>
            <Link href="/sign-up" className="hover:text-primary">
              {t('signUp')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
