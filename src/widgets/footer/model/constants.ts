export const footerColumns = [
  {
    title: 'My Account',
    links: [
      { label: 'My Account', href: '/account' },
      { label: 'Order History', href: '/orders' },
      { label: 'Shopping Cart', href: '/cart' },
      { label: 'Wishlist', href: '/wishlist' },
    ],
  },
  {
    title: 'Helps',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Faqs', href: '/faqs' },
      { label: 'Terms & Condition', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Shopery',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Shop', href: '/shop' },
      { label: 'Product', href: '/products' },
      { label: 'Track Order', href: '/track-order' },
    ],
  },
] as const;

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook.svg' },
  { label: 'X', href: 'https://x.com', icon: 'twitter.svg' },
  { label: 'Pinterest', href: 'https://www.pinterest.com', icon: 'pinterest.svg' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram.svg' },
] as const;
