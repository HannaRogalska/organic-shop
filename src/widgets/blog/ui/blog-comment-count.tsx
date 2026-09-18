'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useBlogCommentsStore } from '../model/blog-comments-store';
import { getMockBlogComments } from '../model/get-mock-blog-comments';

type BlogCommentCountProps = {
  slug: string;
};

export function BlogCommentCount({ slug }: BlogCommentCountProps) {
  const t = useTranslations('BlogPage.posts');
  const storedComments = useBlogCommentsStore((state) => state.commentsBySlug[slug]);
  const hasHydrated = useBlogCommentsStore((state) => state.hasHydrated);
  const mockCount = getMockBlogComments(slug).length;
  const count = hasHydrated ? (storedComments?.length ?? mockCount) : mockCount;

  return (
    <span className="flex items-center gap-1">
      <Image src="/images/blog/comment.svg" alt="" width={18} height={18} aria-hidden="true" />
      {t('comments', { count })}
    </span>
  );
}
