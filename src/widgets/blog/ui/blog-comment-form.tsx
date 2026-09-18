'use client';

import { useEffect, useState, type SyntheticEvent } from 'react';
import { useTranslations } from 'next-intl';

import type { BlogComment } from '../model/blog-comment';
import { getMockBlogComments } from '../model/get-mock-blog-comments';
import { useBlogCommentsStore } from '../model/blog-comments-store';

type BlogCommentFormProps = {
  slug: string;
};

export function BlogCommentForm({ slug }: BlogCommentFormProps) {
  const t = useTranslations('BlogPostPage.comments');
  const storedComments = useBlogCommentsStore((state) => state.commentsBySlug[slug]);
  const hasHydrated = useBlogCommentsStore((state) => state.hasHydrated);
  const mockComments = getMockBlogComments(slug);
  const comments = hasHydrated ? (storedComments ?? mockComments) : mockComments;
  const addComment = useBlogCommentsStore((state) => state.addComment);
  const initializeComments = useBlogCommentsStore((state) => state.initializeComments);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    async function hydrateAndInitializeComments() {
      try {
        await useBlogCommentsStore.persist.rehydrate();
      } finally {
        initializeComments(slug, getMockBlogComments(slug));
      }
    }

    void hydrateAndInitializeComments();
  }, [initializeComments, slug]);
  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const author = String(formData.get('name') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!author || !message) return;

    const newComment: BlogComment = {
      id: crypto.randomUUID(),
      author,
      message,
    };

    addComment(slug, newComment);
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <section className="mt-12 border-t border-gray-100 pt-10">
      <h2 className="text-2xl font-semibold text-gray-900">{t('title')}</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-gray-900">
            {t('name')}
            <input
              type="text"
              name="name"
              required
              className="h-12 rounded-md border border-gray-100 px-4 outline-none transition-colors focus:border-primary"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-gray-900">
            {t('email')}
            <input
              type="email"
              name="email"
              required
              className="h-12 rounded-md border border-gray-100 px-4 outline-none transition-colors focus:border-primary"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm text-gray-900">
          {t('message')}
          <textarea
            name="message"
            required
            rows={6}
            className="resize-none rounded-md border border-gray-100 p-4 outline-none transition-colors focus:border-primary"
          />
        </label>

        <button
          type="submit"
          className="rounded-full bg-primary px-8 py-3.5 font-semibold text-white transition-colors hover:bg-hard-primary"
        >
          {t('submit')}
        </button>
        {isSubmitted && (
          <p role="status" className="text-sm font-medium text-primary">
            {t('success')}
          </p>
        )}
      </form>
      {comments.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900">
            {t('listTitle', { count: comments.length })}
          </h3>

          <div className="mt-5 space-y-4">
            {comments.map((comment) => (
              <article key={comment.id} className="rounded-md border border-gray-100 p-5">
                <h4 className="font-medium text-gray-900">{comment.author}</h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{comment.message}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
