export const footerColumns = [
  {
    title: 'My Account',
    links: [
      ['My Account', '/account'],
      ['Order History', '/orders'],
      ['Shopping Cart', '/cart'],
      ['Wishlist', '/wishlist'],
    ],
  },
  {
    title: 'Helps',
    links: [
      ['Contact', '/contact'],
      ['Faqs', '/faqs'],
      ['Terms & Condition', '/terms'],
      ['Privacy Policy', '/privacy'],
    ],
  },
  {
    title: 'Shopery',
    links: [
      ['About', '/about'],
      ['Shop', '/shop'],
      ['Product', '/products'],
      ['Track Order', '/track-order'],
    ],
  },
] as const;

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook.svg' },
  { label: 'X', href: 'https://x.com', icon: 'twitter.svg' },
  { label: 'Pinterest', href: 'https://www.pinterest.com', icon: 'pinterest.svg' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram.svg' },
] as const;
