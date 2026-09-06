import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFoundPage() {
  const t = await getTranslations('NotFoundPage');
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-7xl font-semibold text-primary">404</p>

        <h1 className="mt-6 text-3xl font-semibold text-gray-900 sm:text-4xl">{t('title')}</h1>

        <p className="mt-4 text-base text-gray-500">{t('description')}</p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-hard-primary"
        >
          {t('backHome')}
        </Link>
      </div>
    </main>
  );
}
