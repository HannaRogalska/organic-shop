import { getTranslations } from 'next-intl/server';

import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';
import { SignInForm } from '@/widgets/auth/ui/sign-in-form';

export default async function SignInPage() {
  const t = await getTranslations('Auth.signIn');

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[{ label: t('home'), href: '/' }, { label: t('breadcrumb') }]}
        />

        <section className="px-4 py-20 sm:px-8">
          <div className="mx-auto w-full max-w-130 rounded-lg border border-gray-100 bg-background px-6 pt-6 pb-8 shadow-[0_0_28px_rgba(0,38,3,0.08)]">
            <h1 className="text-center text-3xl leading-tight font-semibold text-gray-900">
              {t('title')}
            </h1>
            <SignInForm />
          </div>
        </section>
      </main>

      <Footer variant="inner" />
    </div>
  );
}
