'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type BlogPaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export function BlogPagination({ currentPage, pageCount, onPageChange }: BlogPaginationProps) {
  const t = useTranslations('BlogPage.pagination');
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className="mt-10" aria-label={t('label')}>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label={t('previous')}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="grid size-9 cursor-pointer place-items-center rounded-full border border-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Image
            src="/images/blog/pagination-chevron.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
            className="rotate-180"
          />
        </button>
        {pages.map((page) => {
          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              aria-label={t('page', { number: page })}
              aria-current={isCurrent ? 'page' : undefined}
              onClick={() => onPageChange(page)}
              className={`size-9 cursor-pointer rounded-full text-sm font-medium transition-colors ${
                isCurrent
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-green-gray-50 hover:text-primary'
              }`}
            >
              {page}
            </button>
          );
        })}
        <button
          type="button"
          aria-label={t('next')}
          disabled={currentPage === pageCount}
          onClick={() => onPageChange(currentPage + 1)}
          className="grid size-9 cursor-pointer place-items-center rounded-full border border-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Image
            src="/images/blog/pagination-chevron.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
