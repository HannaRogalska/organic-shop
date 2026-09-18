import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { BlogComment } from './blog-comment';

type BlogCommentsState = {
  commentsBySlug: Record<string, BlogComment[]>;
  addComment: (slug: string, comment: BlogComment) => void;
  initializeComments: (slug: string, comments: BlogComment[]) => void;
};

export const useBlogCommentsStore = create<BlogCommentsState>()(
  persist(
    (set) => ({
      commentsBySlug: {},

      addComment: (slug, comment) =>
        set((state) => ({
          commentsBySlug: {
            ...state.commentsBySlug,
            [slug]: [...(state.commentsBySlug[slug] ?? []), comment],
          },
        })),

      initializeComments: (slug, comments) =>
        set((state) => {
          if (state.commentsBySlug[slug] !== undefined) {
            return state;
          }

          return {
            commentsBySlug: {
              ...state.commentsBySlug,
              [slug]: comments,
            },
          };
        }),
    }),
    {
      name: 'blog-comments-storage-v2',
    }
  )
);
