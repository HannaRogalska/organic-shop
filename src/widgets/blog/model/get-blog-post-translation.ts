import type { BlogPost } from './constants';

export function getBlogPostTranslation(post: BlogPost, locale: string) {
  return locale === 'pl' ? post.translations.pl : post.translations.en;
}
