export const mockCategories = [
  { name: 'Fresh Fruit', slug: 'fruits' },
  { name: 'Fresh Vegetables', slug: 'vegetables' },
  { name: 'Cooking', slug: 'cooking' },
  { name: 'Snacks', slug: 'snacks' },
  { name: 'Beverages', slug: 'beverages' },
  { name: 'Beauty & Health', slug: 'beauty_health' },
  { name: 'Bread & Bakery', slug: 'bakery' },
  { name: 'Meat & Fish', slug: 'meet_and_fish' },
  { name: 'Baking Needs', slug: 'needs' },
  { name: 'Diabetic Food', slug: 'diabetic' },
  { name: 'Dish Detergents', slug: 'detergents' },
  { name: 'Oil', slug: 'oil' },
];

export const mockProducts = [
  {
    title: 'Organic Green Apple',
    slug: 'organic-green-apple',
    description: 'Crisp and juicy organic green apples full of vitamins.',
    translations: {
      pl: {
        title: 'Ekologiczne zielone jabłko',
        slug: 'ekologiczne-zielone-jablko',
        description: 'Chrupiące i soczyste ekologiczne zielone jabłka pełne witamin.',
      },
    },
    stock: 150,
    price: '3.99',
    salePrice: '2.99',
    rating: '4.80',
    images: [
      'https://images.unsplash.com/photo-1678942946279-c83e37f32304?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    categorySlug: 'fruits',
  },
  {
    title: 'Crunchy Orange Carrot',
    slug: 'crunchy-orange-carrot',
    description: 'Freshly harvested crunchy organic carrots.',
    translations: {
      pl: {
        title: 'Chrupiąca pomarańczowa marchew',
        slug: 'chrupiaca-pomaranczowa-marchew',
        description: 'Świeżo zebrane, chrupiące ekologiczne marchewki.',
      },
    },
    stock: 250,
    price: '1.49',
    salePrice: null,
    rating: '4.70',
    images: [
      'https://images.unsplash.com/photo-1666595162324-df6f452108e7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    categorySlug: 'vegetables',
  },
  {
    title: 'Sea Salt Pack',
    slug: 'sea-salt-pack',
    description: 'Natural unrefined sea salt for fine cooking.',
    translations: {
      pl: {
        title: 'Opakowanie soli morskiej',
        slug: 'opakowanie-soli-morskiej',
        description: 'Naturalna nierafinowana sól morska do wykwintnego gotowania.',
      },
    },
    stock: 100,
    price: '2.19',
    salePrice: null,
    rating: '4.50',
    images: [
      'https://images.unsplash.com/photo-1667803552102-00de1188d66f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    categorySlug: 'cooking',
  },
  {
    title: 'Organic Potato Chips',
    slug: 'organic-potato-chips',
    description: 'Crispy sea salt potato chips baked in avocado oil.',
    translations: {
      pl: {
        title: 'Ekologiczne chipsy ziemniaczane',
        slug: 'ekologiczne-chipsy-ziemniaczane',
        description: 'Chrupiące chipsy ziemniaczane z solą morską, pieczone na oleju z awokado.',
      },
    },
    stock: 180,
    price: '2.99',
    salePrice: '2.49',
    rating: '4.30',
    images: [
      'https://images.unsplash.com/photo-1708746333830-6a40a841e810?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T3JnYW5pYyUyMFBvdGF0byUyMENoaXBzfGVufDB8MnwwfHx8MA%3D%3D',
    ],
    categorySlug: 'snacks',
  },
  {
    title: 'Cold-Pressed Apple Juice',
    slug: 'cold-pressed-apple-juice',
    description: '100% natural pure cold-pressed apple juice.',
    translations: {
      pl: {
        title: 'Sok jabłkowy tłoczony na zimno',
        slug: 'sok-jablkowy-tloczony-na-zimno',
        description: 'W 100% naturalny, czysty sok jabłkowy tłoczony na zimno.',
      },
    },
    stock: 90,
    price: '4.50',
    salePrice: null,
    rating: '4.90',
    images: [
      'https://images.unsplash.com/photo-1638176093577-81646507e3ae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fEFwcGxlJTIwSnVpY2V8ZW58MHwyfDB8fHww',
    ],
    categorySlug: 'beverages',
  },

  {
    title: 'Organic Herbal Shampoo',
    slug: 'organic-herbal-shampoo',
    description: 'Eco-friendly natural shampoo with aloe vera extract.',
    translations: {
      pl: {
        title: 'Ekologiczny szampon ziołowy',
        slug: 'ekologiczny-szampon-ziolowy',
        description: 'Przyjazny środowisku naturalny szampon z ekstraktem z aloesu.',
      },
    },
    stock: 50,
    price: '12.99',
    salePrice: '9.99',
    rating: '4.60',
    images: [
      'https://images.unsplash.com/photo-1559265125-9bcc4f302460?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fEhlcmJhbCUyMFNoYW1wb298ZW58MHwyfDB8fHww',
    ],
    categorySlug: 'beauty_health',
  },

  {
    title: 'Fresh Butter Croissant',
    slug: 'fresh-butter-croissant',
    description: 'Flaky and warm flaky pastry made with real premium butter.',
    translations: {
      pl: {
        title: 'Świeży rogalik maślany',
        slug: 'swiezy-rogalik-maslany',
        description: 'Ciepłe, kruche ciasto przygotowane z prawdziwego masła najwyższej jakości.',
      },
    },
    stock: 40,
    price: '1.89',
    salePrice: null,
    rating: '4.95',
    images: [
      'https://images.unsplash.com/photo-1667848249714-b5f120a74b22?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fENyb2lzc2FudHxlbnwwfDJ8MHx8fDA%3D',
    ],
    categorySlug: 'bakery',
  },
  {
    title: 'Fresh Salmon Fillet',
    slug: 'fresh-salmon-fillet',
    description: 'Wild-caught premium fresh salmon fillet.',
    translations: {
      pl: {
        title: 'Świeży filet z łososia',
        slug: 'swiezy-filet-z-lososia',
        description: 'Najwyższej jakości świeży filet z dziko żyjącego łososia.',
      },
    },
    stock: 30,
    price: '18.99',
    salePrice: '15.49',
    rating: '4.85',
    images: [
      'https://images.unsplash.com/photo-1739785938093-c2b6befeca2f?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    categorySlug: 'meet_and_fish',
  },

  {
    title: 'Organic Wheat Flour',
    slug: 'organic-wheat-flour',
    description: 'Unbleached high-quality whole wheat flour for perfect baking.',
    translations: {
      pl: {
        title: 'Ekologiczna mąka pszenna',
        slug: 'ekologiczna-maka-pszenna',
        description:
          'Niebielona pełnoziarnista mąka pszenna wysokiej jakości, idealna do wypieków.',
      },
    },
    stock: 110,
    price: '3.49',
    salePrice: null,
    rating: '4.75',
    images: [
      'https://images.unsplash.com/photo-1581268497089-7a975fb491a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE9yZ2FuaWMlMjBXaGVhdCUyMEZsb3VyfGVufDB8MnwwfHx8MA%3D%3D',
    ],
    categorySlug: 'needs',
  },
  {
    title: 'Zero Sugar Granola',
    slug: 'zero-sugar-granola',
    description: 'Nutty diabetic-friendly granola with sweetener berries.',
    translations: {
      pl: {
        title: 'Granola bez cukru',
        slug: 'granola-bez-cukru',
        description:
          'Orzechowa granola z jagodami i substancją słodzącą, odpowiednia dla diabetyków.',
      },
    },
    stock: 75,
    price: '5.99',
    salePrice: null,
    rating: '4.40',
    images: [
      'https://images.unsplash.com/photo-1704369354376-a6defd8e840d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fFplcm8lMjBTdWdhciUyMEdyYW5vbGF8ZW58MHwyfDB8fHww',
    ],
    categorySlug: 'diabetic',
  },
  {
    title: 'Eco Dish Soap',
    slug: 'eco-dish-soap',
    description: 'Plant-based biodegradable liquid dish soap with lemon scent.',
    translations: {
      pl: {
        title: 'Ekologiczny płyn do naczyń',
        slug: 'ekologiczny-plyn-do-naczyn',
        description: 'Biodegradowalny płyn do naczyń na bazie roślin o zapachu cytryny.',
      },
    },
    stock: 130,
    price: '4.25',
    salePrice: '3.75',
    rating: '4.65',
    images: [
      'https://images.unsplash.com/photo-1552862623-ba280cd94315?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEVjbyUyMERpc2glMjBTb2FwfGVufDB8MnwwfHx8MA%3D%3D',
    ],
    categorySlug: 'detergents',
  },
  {
    title: 'Extra Virgin Olive Oil',
    slug: 'extra-virgin-olive-oil',
    description: 'Premium cold-pressed extra virgin olive oil from Spain.',
    translations: {
      pl: {
        title: 'Oliwa z oliwek extra virgin',
        slug: 'oliwa-z-oliwek-extra-virgin',
        description: 'Najwyższej jakości hiszpańska oliwa z oliwek extra virgin tłoczona na zimno.',
      },
    },
    stock: 65,
    price: '14.99',
    salePrice: null,
    rating: '4.90',
    images: [
      'https://images.unsplash.com/photo-1627894005682-166e8687356a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXh0cmElMjBWaXJnaW4lMjBPbGl2ZSUyME9pbHxlbnwwfDJ8MHx8fDA%3D',
    ],
    categorySlug: 'oil',
  },
];
