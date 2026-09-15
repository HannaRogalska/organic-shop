import { getTranslations } from 'next-intl/server';

import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';
import { BlogContent } from '@/widgets/blog/ui/blog-content';

export default async function BlogPage() {
  const t = await getTranslations('BlogPage');

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[{ label: t('home'), href: '/' }, { label: t('breadcrumb') }]}
        />
        <BlogContent />
      </main>

      <Footer variant="inner" />
    </div>
  );
}
