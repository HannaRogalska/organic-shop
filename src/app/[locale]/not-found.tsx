import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Header } from '@/widgets/header/header';

export default async function NotFoundPage() {
  const t = await getTranslations('NotFoundPage');
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />
      <main className="flex-1 bg-background">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[{ label: t('home'), href: '/' }, { label: t('breadcrumb') }]}
        />

        <section className="grid place-items-center px-4 py-20">
          <div className="w-full max-w-153 text-center">
            <Image
              src="/images/errors/404.svg"
              alt=""
              width={583}
              height={355}
              preload
              className="mx-auto h-auto w-full max-w-146"
            />
            <h1 className="mt-8 text-3xl leading-tight font-semibold text-gray-900 sm:text-4xl">
              {t('title')}
            </h1>

            <p className="mt-4 text-base text-gray-500">{t('description')}</p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-background transition-colors hover:bg-hard-primary"
            >
              {t('backHome')}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
