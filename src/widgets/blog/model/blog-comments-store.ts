import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { BlogComment } from './blog-comment';

type BlogCommentsState = {
  commentsBySlug: Record<string, BlogComment[]>;
  hasHydrated: boolean;
  addComment: (slug: string, comment: BlogComment) => void;
  initializeComments: (slug: string, comments: BlogComment[]) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useBlogCommentsStore = create<BlogCommentsState>()(
  persist(
    (set) => ({
      commentsBySlug: {},
      hasHydrated: false,

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

      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: 'blog-comments-storage-v2',
      skipHydration: true,
      onRehydrateStorage: () => (state, error) => {
        if (!error) {
          state?.setHasHydrated(true);
        }
      },
    }
  )
);
