export const BLOG_GALLERY_IMAGES = Array.from(
  { length: 8 },
  (_, index) => `/images/blog/gallery/gallery-${index + 1}.png`
);

export const RECENT_POSTS = [
  {
    titleKey: 'firstTitle',
    image: '/images/blog/recent/recent-1.png',
    publishedAt: '2026-05-05',
  },
  {
    titleKey: 'secondTitle',
    image: '/images/blog/recent/recent-2.png',
    publishedAt: '2026-04-03',
  },
  {
    titleKey: 'thirdTitle',
    image: '/images/blog/recent/recent-3.png',
    publishedAt: '2026-01-15',
  },
] as const;

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'fresh-organic-vegetables',
    titleKey: 'first',
    image: '/images/blog/posts/post-1.png',
    comments: 65,
    publishedAt: '2026-09-12',
  },
  {
    id: 2,
    slug: 'seasonal-fruit',
    titleKey: 'second',
    image: '/images/blog/posts/post-2.png',
    comments: 48,
    publishedAt: '2026-08-28',
  },
  {
    id: 3,
    slug: 'nutritious-homemade-food',
    titleKey: 'third',
    image: '/images/blog/posts/post-3.png',
    comments: 32,
    publishedAt: '2026-08-10',
  },
  {
    id: 4,
    slug: 'locally-grown-produce',
    titleKey: 'fourth',
    image: '/images/blog/posts/post-4.png',
    comments: 27,
    publishedAt: '2026-07-19',
  },
  {
    id: 5,
    slug: 'healthy-kitchen-ingredients',
    titleKey: 'fifth',
    image: '/images/blog/posts/post-5.png',
    comments: 41,
    publishedAt: '2026-06-30',
  },
  {
    id: 6,
    slug: 'enjoy-fresh-vegetables',
    titleKey: 'sixth',
    image: '/images/blog/posts/post-6.png',
    comments: 19,
    publishedAt: '2026-06-14',
  },
  {
    id: 7,
    slug: 'storing-fruit-and-vegetables',
    titleKey: 'seventh',
    image: '/images/blog/posts/post-7.png',
    comments: 36,
    publishedAt: '2026-05-22',
  },
  {
    id: 8,
    slug: 'seasonal-family-recipes',
    titleKey: 'eighth',
    image: '/images/blog/posts/post-8.png',
    comments: 24,
    publishedAt: '2026-04-17',
  },
  {
    id: 9,
    slug: 'farm-to-table',
    titleKey: 'ninth',
    image: '/images/blog/posts/post-9.png',
    comments: 52,
    publishedAt: '2026-03-09',
  },
  {
    id: 10,
    slug: 'healthy-green-lifestyle',
    titleKey: 'tenth',
    image: '/images/blog/posts/post-10.png',
    comments: 30,
    publishedAt: '2026-02-01',
  },
] as const;

export type BlogPost = (typeof BLOG_POSTS)[number];
