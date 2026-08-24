'use client';

import type { ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Locale = (typeof routing.locales)[number];

export function LanguageSelect() {
  const t = useTranslations('Header.topBar');
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleLocaleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    const queryString = searchParams?.toString() ?? '';
    const href = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(href, { locale: nextLocale });
  }

  return (
    <label className="flex items-center gap-1.5">
      <span className="sr-only">{t('language')}</span>
      <select
        className="appearance-none bg-transparent pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        value={locale}
        onChange={handleLocaleChange}
      >
        <option value="en">ENG</option>
        <option value="pl">POL</option>
      </select>
    </label>
  );
}
