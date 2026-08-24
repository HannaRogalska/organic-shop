export const categories = [
  {
    id: 1,
    key: 'freshFruit',
    value: 'Fresh Fruit',
    img: '/images/header/apple.svg',
  },
  {
    id: 2,
    key: 'freshVegetables',
    value: 'Fresh Vegetables',
    img: '/images/header/vegetables.svg',
  },
  {
    id: 3,
    key: 'riverFish',
    value: 'River Fish',
    img: '/images/header/fish.svg',
  },
  {
    id: 4,
    key: 'chickenAndMeat',
    value: 'Chicken & Meat',
    img: '/images/header/meat.svg',
  },
  {
    id: 5,
    key: 'drinkAndWater',
    value: 'Drink & Water',
    img: '/images/header/drink.svg',
  },
  {
    id: 6,
    key: 'yogurtAndIceCream',
    value: 'Yogurt & Ice Cream',
    img: '/images/header/ice-cream.svg',
  },
  {
    id: 7,
    key: 'cakeAndBread',
    value: 'Cake & Bread',
    img: '/images/header/cupcake.svg',
  },
  {
    id: 8,
    key: 'butterAndCream',
    value: 'Butter & Cream',
    img: '/images/header/pie.svg',
  },
  {
    id: 9,
    key: 'cooking',
    value: 'Cooking',
    img: '/images/header/food.svg',
  },
] as const;

export const navigation = [
  { key: 'home', href: '/' },
  { key: 'shop', href: '/shop' },
  { key: 'pages', href: '/pages' },
  { key: 'blog', href: '/blog' },
  { key: 'aboutUs', href: '/about' },
  { key: 'contactUs', href: '/contact' },
] as const;
