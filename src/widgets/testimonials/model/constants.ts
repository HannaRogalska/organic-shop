import type { Testimonial } from '@/entities/testimonial/model/types';

const TESTIMONIAL_TEXT =
  'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'robert-fox',
    text: TESTIMONIAL_TEXT,
    client: {
      avatar: '/images/testimonials/robert-fox.png',
      name: 'Robert Fox',
      roleKey: 'customerRole',
    },
    rating: 5,
  },
  {
    id: 'dianne-russell',
    text: TESTIMONIAL_TEXT,
    client: {
      avatar: '/images/testimonials/dianne-russell.png',
      name: 'Dianne Russell',
      roleKey: 'customerRole',
    },
    rating: 4,
  },
  {
    id: 'eleanor-pena',
    text: TESTIMONIAL_TEXT,
    client: {
      avatar: '/images/testimonials/eleanor-pena.png',
      name: 'Eleanor Pena',
      roleKey: 'customerRole',
    },
    rating: 5,
  },
  {
    id: 'cameron-williamson',
    text: TESTIMONIAL_TEXT,
    client: {
      avatar: '/images/testimonials/robert-fox.png',
      name: 'Cameron Williamson',
      roleKey: 'customerRole',
    },
    rating: 3,
  },
  {
    id: 'kristin-watson',
    text: TESTIMONIAL_TEXT,
    client: {
      avatar: '/images/testimonials/dianne-russell.png',
      name: 'Kristin Watson',
      roleKey: 'customerRole',
    },
    rating: 4,
  },
  {
    id: 'ralph-edwards',
    text: TESTIMONIAL_TEXT,
    client: {
      avatar: '/images/testimonials/eleanor-pena.png',
      name: 'Ralph Edwards',
      roleKey: 'customerRole',
    },
    rating: 4,
  },
];
