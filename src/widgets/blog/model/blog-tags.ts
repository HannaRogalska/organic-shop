export const BLOG_TAGS = [
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

export type BlogTag = (typeof BLOG_TAGS)[number];
