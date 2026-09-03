'use client';
import { useTranslations } from 'next-intl';

type ErrorPageProps = {
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  const t = useTranslations('ErrorPage');

  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-16">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{t('title')}</h1>

        <p className="mt-4 text-base text-gray-500">{t('description')}</p>

        <button
          type="button"
          onClick={reset}
          className="mt-8 cursor-pointer rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-hard-primary"
        >
          {t('retry')}
        </button>
      </div>
    </main>
  );
}
