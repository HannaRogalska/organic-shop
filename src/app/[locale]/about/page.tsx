import { getTranslations } from 'next-intl/server';

import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';
import { AboutIntro } from '@/widgets/about/ui/about-intro';
import { AboutBenefits } from '@/widgets/about/ui/about-benefits';
import { AboutDelivery } from '@/widgets/about/ui/about-delivery';
import { ProfessionalMembers } from '@/widgets/professional-members/professional-members';
import { Testimonials } from '@/widgets/testimonials/testimonials';
import { Sponsors } from '@/widgets/sponsors/sponsors';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[{ label: t('home'), href: '/' }, { label: t('breadcrumb') }]}
        />
        <AboutIntro />
        <AboutBenefits />
        <AboutDelivery />
        <ProfessionalMembers />
        <Testimonials />
        <Sponsors />
      </main>

      <Footer variant="inner" />
    </div>
  );
}
