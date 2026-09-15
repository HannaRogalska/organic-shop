'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { BLOG_POSTS } from '../model/constants';
import { BlogPostCard } from './blog-post-card';
import { BlogPagination } from './blog-pagination';

const RESULTS_COUNT = BLOG_POSTS.length;
const POSTS_PER_PAGE = 6;

export function BlogPosts() {
  const t = useTranslations('BlogPage.posts');
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = BLOG_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section aria-label={t('sectionLabel')}>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-500">
          <span>{t('sortBy')}</span>

          <select
            className="h-10 min-w-40 rounded-md border border-gray-100 bg-background px-4 text-sm text-gray-700 focus-visible:outline-2 focus-visible:outline-primary"
            defaultValue="latest"
          >
            <option value="latest">{t('latest')}</option>
          </select>
        </label>

        <p className="text-base text-gray-900">
          {t.rich('results', {
            count: RESULTS_COUNT,
            strong: (chunks) => <strong className="font-semibold">{chunks}</strong>,
          })}
        </p>
      </header>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visiblePosts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} eager={currentPage === 1 && index < 4} />
        ))}
      </div>
      <BlogPagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
