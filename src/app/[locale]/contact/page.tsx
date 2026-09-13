import { getTranslations } from 'next-intl/server';

import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';
import { ContactInfo } from '@/widgets/contact/ui/contact-info';
import { ContactMap } from '@/widgets/contact/ui/contact-map';
import { ContactForm } from '@/widgets/contact/ui/contact-form';

export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[{ label: t('home'), href: '/' }, { label: t('breadcrumb') }]}
        />
        <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-20 sm:px-8 lg:flex-row lg:items-stretch xl:px-0">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap alt={t('mapLabel')} />
      </main>

      <Footer variant="inner" />
    </div>
  );
}
