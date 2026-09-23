'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useBlogCommentsStore } from '../model/blog-comments-store';
import { BLOG_POSTS } from '../model/constants';
import { getMockBlogComments } from '../model/get-mock-blog-comments';
import { BlogPostCard } from './blog-post-card';
import { BlogPagination } from './blog-pagination';
import type { BlogTag } from '../model/blog-tags';

const POSTS_PER_PAGE = 6;

type BlogPostsProps = {
  selectedTag: BlogTag | null;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export function BlogPosts({ selectedTag, currentPage, onPageChange }: BlogPostsProps) {
  type SortOption = 'latest' | 'oldest' | 'popular';
  const t = useTranslations('BlogPage.posts');
  const [sortOption, setSortOption] = useState<SortOption>('latest');
  const commentsBySlug = useBlogCommentsStore((state) => state.commentsBySlug);
  const hasHydrated = useBlogCommentsStore((state) => state.hasHydrated);

  useEffect(() => {
    void useBlogCommentsStore.persist.rehydrate();
  }, []);
  const filteredPosts = selectedTag
    ? BLOG_POSTS.filter((post) => post.tags.some((tag) => tag === selectedTag))
    : BLOG_POSTS;

  const sortedPosts = [...filteredPosts].sort((left, right) => {
    if (sortOption === 'popular') {
      const leftCommentsCount =
        hasHydrated && commentsBySlug[left.slug]
          ? commentsBySlug[left.slug].length
          : getMockBlogComments(left.slug).length;
      const rightCommentsCount =
        hasHydrated && commentsBySlug[right.slug]
          ? commentsBySlug[right.slug].length
          : getMockBlogComments(right.slug).length;

      return rightCommentsCount - leftCommentsCount;
    }

    if (sortOption === 'oldest') {
      return left.publishedAt.localeCompare(right.publishedAt);
    }

    return right.publishedAt.localeCompare(left.publishedAt);
  });

  const pageCount = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const visiblePosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section aria-label={t('sectionLabel')}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-500">
          <span>{t('sortBy')}</span>

          <select
            className="h-10 min-w-40 rounded-md border border-gray-100 bg-background px-4 text-sm text-gray-700 focus-visible:outline-2 focus-visible:outline-primary"
            value={sortOption}
            onChange={(event) => {
              setSortOption(event.target.value as SortOption);
              onPageChange(1);
            }}
          >
            <option value="latest">{t('latest')}</option>
            <option value="oldest">{t('oldest')}</option>
            <option value="popular">{t('popular')}</option>
          </select>
        </label>

        <p className="text-base text-gray-900">
          {t.rich('results', {
            count: filteredPosts.length,
            strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
          })}
        </p>
      </header>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visiblePosts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} eager={currentPage === 1 && index < 4} />
        ))}
      </div>
      <BlogPagination currentPage={currentPage} pageCount={pageCount} onPageChange={onPageChange} />
    </section>
  );
}
