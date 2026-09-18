import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { getBlogPostTranslation } from '../model/get-blog-post-translation';

import type { BlogPost } from '../model/constants';
import { Link } from '@/i18n/navigation';
import { BlogCommentCount } from './blog-comment-count';

type BlogPostCardProps = {
  post: BlogPost;
  eager?: boolean;
};

export function BlogPostCard({ post, eager = false }: BlogPostCardProps) {
  const t = useTranslations('BlogPage.posts');
  const locale = useLocale();
  const translation = getBlogPostTranslation(post, locale);

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-background transition-shadow hover:shadow-lg">
      <div className="relative aspect-106/81 overflow-hidden">
        <Image
          src={post.image}
          alt={translation.title}
          fill
          loading={eager ? 'eager' : 'lazy'}
          sizes="(min-width: 1280px) 424px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Image src="/images/blog/tag.svg" alt="" width={20} height={20} aria-hidden="true" />
            {t('category')}
          </span>

          <span className="flex items-center gap-1">
            <Image src="/images/blog/user.svg" alt="" width={20} height={20} aria-hidden="true" />
            {t('author', { name: 'Admin' })}
          </span>

          <BlogCommentCount slug={post.slug} />
        </div>
        <h2 className="mt-2 line-clamp-2 text-lg leading-normal font-medium text-gray-900">
          {translation.title}
        </h2>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-3 text-base font-semibold text-primary hover:text-hard-primary"
        >
          {t('readMore')}

          <Image
            src="/images/blog/arrow-right.svg"
            alt=""
            width={17}
            height={14}
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
