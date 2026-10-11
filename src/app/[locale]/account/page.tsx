import { headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';

import { redirect } from '@/i18n/navigation';
import { auth } from '@/shared/api/auth/server';
import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';

type AccountPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AccountPage({ params }: AccountPageProps) {
  const { locale } = await params;
  const t = await getTranslations('AccountPage');

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect({
      href: '/sign-in',
      locale,
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[
            { label: t('home'), href: '/' },
            { label: t('account'), href: '/account' },
            { label: t('dashboard') },
          ]}
        />

        <section className="px-4 py-10 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-330">
            <h1 className="text-3xl font-semibold text-gray-900">{t('title')}</h1>

            <div className="mt-6 rounded-lg border border-gray-100 p-6">
              <p className="font-medium text-gray-900">{session.user.name}</p>
              <p className="mt-1 text-sm text-gray-500">{session.user.email}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="inner" />
    </div>
  );
}
