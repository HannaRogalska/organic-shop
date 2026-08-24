import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function SearchForm() {
  const t = useTranslations('Header.search');
  return (
    <form
      action="/shop"
      method="get"
      className="flex h-11 w-full overflow-hidden rounded-md border border-gray-100 bg-background sm:h-12"
    >
      <label className="sr-only" htmlFor="site-search">
        {t('label')}
      </label>
      <div className="flex min-w-0 flex-1 items-center gap-2 px-4">
        <Image src="/images/header/search.svg" alt="" width={20} height={20} />
        <input
          id="site-search"
          name="search"
          type="search"
          placeholder={t('placeholder')}
          className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-hard-primary"
      >
        {t('submit')}
      </button>
    </form>
  );
}
