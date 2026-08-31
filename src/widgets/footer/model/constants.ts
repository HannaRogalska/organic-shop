export const footerColumns = [
  {
    titleKey: 'columns.account.title',
    links: [
      { labelKey: 'columns.account.myAccount', href: '/account' },
      { labelKey: 'columns.account.orderHistory', href: '/orders' },
      { labelKey: 'columns.account.shoppingCart', href: '/cart' },
      { labelKey: 'columns.account.wishlist', href: '/wishlist' },
    ],
  },
  {
    titleKey: 'columns.help.title',
    links: [
      { labelKey: 'columns.help.contact', href: '/contact' },
      { labelKey: 'columns.help.faqs', href: '/faqs' },
      { labelKey: 'columns.help.termsAndConditions', href: '/terms' },
      { labelKey: 'columns.help.privacyPolicy', href: '/privacy' },
    ],
  },
  {
    titleKey: 'columns.shopery.title',
    links: [
      { labelKey: 'columns.shopery.about', href: '/about' },
      { labelKey: 'columns.shopery.shop', href: '/shop' },
      { labelKey: 'columns.shopery.products', href: '/products' },
      { labelKey: 'columns.shopery.trackOrder', href: '/track-order' },
    ],
  },
] as const;
export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook.svg' },
  { label: 'X', href: 'https://x.com', icon: 'twitter.svg' },
  { label: 'Pinterest', href: 'https://www.pinterest.com', icon: 'pinterest.svg' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram.svg' },
] as const;
