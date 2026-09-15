import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';

import { BLOG_GALLERY_IMAGES, RECENT_POSTS } from '../model/constants';

const TAG_KEYS = [
  'healthy',
  'lowFat',
  'vegetarian',
  'bread',
  'kidsFood',
  'vitamins',
  'snacks',
  'tiffin',
  'meat',
  'lunch',
  'dinner',
] as const;

export function BlogSidebar() {
  const t = useTranslations('BlogPage.sidebar');
  const format = useFormatter();

  return (
    <aside aria-label={t('label')}>
      <section className="py-6 first:pt-0">
        <h2 className="text-xl leading-normal font-medium text-gray-900">{t('popularTags')}</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {TAG_KEYS.map((key) => (
            <span
              key={key}
              className="rounded-full bg-gray-50 px-4 py-2 text-sm leading-normal text-gray-900"
            >
              {t(`tags.${key}`)}
            </span>
          ))}
        </div>
      </section>

      <section className="py-6 first:pt-0">
        <h2 className="text-xl leading-normal font-medium text-gray-900">{t('gallery')}</h2>
        <div className="mt-5 grid grid-cols-4 gap-2">
          {BLOG_GALLERY_IMAGES.map((image) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-md">
              <Image src={image} alt="" fill sizes="100px" className="object-cover" />
            </div>
          ))}
        </div>
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
