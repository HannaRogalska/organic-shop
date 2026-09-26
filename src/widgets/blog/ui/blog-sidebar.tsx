'use client';
import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';

import { BLOG_GALLERY_IMAGES, RECENT_POSTS } from '../model/constants';
import { BLOG_TAGS, type BlogTag } from '../model/blog-tags';
import { BlogGallery } from './blog-gallery';

type BlogSidebarProps = {
  selectedTag: BlogTag | null;
  onTagChange: (tag: BlogTag) => void;
};

export function BlogSidebar({ selectedTag, onTagChange }: BlogSidebarProps) {
  const t = useTranslations('BlogPage.sidebar');
  const format = useFormatter();

  return (
    <aside aria-label={t('label')}>
      <section className="py-6 first:pt-0">
        <h2 className="text-xl leading-normal font-medium text-gray-900">{t('popularTags')}</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {BLOG_TAGS.map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={selectedTag === key}
              onClick={() => onTagChange(key)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm leading-normal transition-colors ${
                selectedTag === key
                  ? 'bg-primary text-white'
                  : 'bg-gray-50 text-gray-900 hover:bg-green-gray-50 hover:text-primary'
              }`}
            >
              {t(`tags.${key}`)}
            </button>
          ))}
        </div>
      </section>

      <section className="py-6 first:pt-0">
        <h2 className="text-xl leading-normal font-medium text-gray-900">{t('gallery')}</h2>
        <BlogGallery images={BLOG_GALLERY_IMAGES} />
      </section>

      <section className="py-6 first:pt-0">
        <h2 className="text-xl leading-normal font-medium text-gray-900">{t('recentlyAdded')}</h2>
        <div className="mt-4 space-y-4">
          {RECENT_POSTS.map((post) => (
            <article key={post.titleKey} className="flex gap-3">
              <div className="relative h-19.25 w-25 shrink-0 overflow-hidden rounded-md">
                <Image src={post.image} alt="" fill sizes="100px" className="object-cover" />
              </div>

              <div className="min-w-0">
                <h3 className="line-clamp-2 text-base leading-normal font-medium text-gray-900">
                  {t(`recentPosts.${post.titleKey}`)}
                </h3>

                <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                  <Image
                    src="/images/blog/calendar.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />

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
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}
