import { headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';

import { getUserOrders } from '@/entities/order/api/get-recent-orders';
import { redirect } from '@/i18n/navigation';
import { auth } from '@/shared/api/auth/server';
import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { AccountNavigation } from '@/widgets/account-dashboard/ui/account-navigation';
import { RecentOrdersTable } from '@/widgets/account-dashboard/ui/recent-orders-table';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';

type OrdersPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OrdersPage({ params }: OrdersPageProps) {
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

  const orders = await getUserOrders(session.user.id);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('orders.breadcrumbLabel')}
          items={[
            { label: t('home'), href: '/' },
            { label: t('account'), href: '/account' },
            { label: t('orders.breadcrumb') },
          ]}
        />

        <section className="px-4 py-10 sm:px-8 lg:px-16">
          <div className="mx-auto w-full max-w-330">
            <h1 className="sr-only">{t('orders.title')}</h1>

            <div className="flex flex-col gap-6 lg:flex-row">
              <AccountNavigation />

              <div className="min-w-0 flex-1">
                <RecentOrdersTable orders={orders} title={t('orders.title')} showViewAll={false} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="inner" />
    </div>
  );
}
