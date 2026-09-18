import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getFormatter, getTranslations } from 'next-intl/server';
import { getBlogPostTranslation } from '@/widgets/blog/model/get-blog-post-translation';

import { PageBreadcrumbs } from '@/shared/ui/page-breadcrumbs/page-breadcrumbs';
import { Footer } from '@/widgets/footer/footer';
import { Header } from '@/widgets/header/header';
import { BlogCommentForm } from '@/widgets/blog/ui/blog-comment-form';
import { BlogCommentCount } from '@/widgets/blog/ui/blog-comment-count';

import { BLOG_POSTS } from '@/widgets/blog/model/constants';

type BlogPostPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const t = await getTranslations('BlogPostPage');
  const postsT = await getTranslations('BlogPage.posts');
  const { locale, slug } = await params;
  const format = await getFormatter({ locale });
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }
  const translation = getBlogPostTranslation(post, locale);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header variant="inner" />

      <main className="flex-1">
        <PageBreadcrumbs
          ariaLabel={t('breadcrumbLabel')}
          items={[
            { label: t('home'), href: '/' },
            { label: t('blog'), href: '/blog' },
            { label: t('breadcrumb') },
          ]}
        />

        <article className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-8 xl:px-0">
          <div className="relative aspect-3/2 overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={translation.title}
              fill
              preload
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Image src="/images/blog/tag.svg" alt="" width={20} height={20} aria-hidden="true" />
              {postsT('category')}
            </span>

            <span className="flex items-center gap-1">
              <Image src="/images/blog/user.svg" alt="" width={20} height={20} aria-hidden="true" />
              {postsT('author', { name: t('authorName') })}
            </span>

            <BlogCommentCount slug={post.slug} />
          </div>
          <h1 className="mt-3 text-3xl leading-tight font-semibold text-gray-900 sm:text-4xl">
            {translation.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/blog/author.png"
                alt={t('authorAvatarAlt')}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-medium text-gray-900">{t('authorName')}</p>

                <p className="mt-1 text-sm text-gray-500">
                  <span>{postsT('author', { name: t('authorName') })}</span>
                  <span aria-hidden="true"> · </span>
                  <time dateTime={post.publishedAt}>
                    {format.dateTime(new Date(`${post.publishedAt}T00:00:00Z`), {
                      timeZone: 'UTC',
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
            <p className="text-xl leading-relaxed font-medium text-gray-900">{translation.lead}</p>

            {translation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <BlogCommentForm slug={post.slug} />
        </article>
      </main>

      <Footer variant="inner" />
    </div>
  );
}
