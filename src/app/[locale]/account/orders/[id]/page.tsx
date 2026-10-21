import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { redirect } from '@/i18n/navigation';
import { auth } from '@/shared/api/auth/server';

import { getOrderDetails } from '@/entities/order/api/get-order-details';
import { getUserAddress } from '@/entities/user/api/get-user-address';
import { getTranslations } from 'next-intl/server';
import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { AccountNavigation } from '@/widgets/account-dashboard/ui/account-navigation';
import { OrderDetailsCard } from '@/widgets/account-dashboard/ui/order-details-card';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';

type OrderDetailsPageProps = {
  params: Promise<{
    locale: string;
    id: string;
  }>;
};

export default async function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { id, locale } = await params;
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
  const [order, address] = await Promise.all([
    getOrderDetails(id, session.user.id, locale),
    getUserAddress(session.user.id),
  ]);

  if (!order) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('orderDetails.breadcrumbLabel')}
          items={[
            { label: t('home'), href: '/' },
            { label: t('account'), href: '/account' },
            { label: t('orders.breadcrumb'), href: '/account/orders' },
            { label: t('orderDetails.breadcrumb') },
          ]}
        />

        <section className="px-4 py-10 sm:px-8 lg:px-16">
          <div className="mx-auto flex w-full max-w-330 flex-col gap-6 lg:flex-row">
            <AccountNavigation />

            <div className="min-w-0 flex-1">
              <OrderDetailsCard order={order} address={address} email={session.user.email} />
            </div>
          </div>
        </section>
      </main>

      <Footer variant="inner" />
    </div>
  );
}
