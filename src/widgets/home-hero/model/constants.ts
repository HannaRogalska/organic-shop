import type { HeroSlide, HeroSlideTitle } from './types';

const ORGANIC_FOOD_TITLE = ['Fresh & Healthy', 'Organic Food'] satisfies HeroSlideTitle;

export const AUTOPLAY_DELAY = 5000;
export const ORGANIC_FOOD_DISCOUNT = '48%';

export const heroSlides = [
  {
    image: '/images/home/hero-banner.png',
    eyebrow: 'Sale Up to',
    discount: ORGANIC_FOOD_DISCOUNT,
    title: ORGANIC_FOOD_TITLE,
  },
  {
    image: '/images/home/banner-2.png',
    eyebrow: 'Sale Up to',
    discount: ORGANIC_FOOD_DISCOUNT,
    title: ORGANIC_FOOD_TITLE,
  },
  {
    image: '/images/home/banner-3.png',
    eyebrow: 'Special Offer',
    discount: ORGANIC_FOOD_DISCOUNT,
    title: ORGANIC_FOOD_TITLE,
  },
] satisfies readonly HeroSlide[];
