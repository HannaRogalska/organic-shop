import type { BlogComment } from './blog-comment';

const MOCK_COMMENTS_BY_SLUG: Record<string, BlogComment[]> = {
  'fresh-organic-vegetables': [
    {
      id: 'fresh-organic-vegetables-1',
      author: 'Dianne Russell',
      message: 'I started adding more seasonal vegetables to our family meals.',
    },
    {
      id: 'fresh-organic-vegetables-2',
      author: 'Robert Fox',
      message: 'The storage recommendations were especially useful.',
    },
    {
      id: 'fresh-organic-vegetables-3',
      author: 'Cameron Williamson',
      message: 'Seasonal vegetables have made our weekly menu much more varied.',
    },
  ],
  'seasonal-fruit': [
    {
      id: 'seasonal-fruit-1',
      author: 'Jenny Wilson',
      message: 'Now I know what to look for when buying seasonal fruit.',
    },
  ],
  'nutritious-homemade-food': [
    {
      id: 'nutritious-homemade-food-1',
      author: 'Courtney Henry',
      message: 'The meal-planning tips made homemade cooking feel much easier.',
    },
    {
      id: 'nutritious-homemade-food-2',
      author: 'Devon Lane',
      message: 'I like that these ideas use simple ingredients I already have.',
    },
    {
      id: 'nutritious-homemade-food-3',
      author: 'Brooklyn Simmons',
      message: 'Preparing a few ingredients ahead of time has saved me a lot of effort.',
    },
    {
      id: 'nutritious-homemade-food-4',
      author: 'Marvin McKinney',
      message: 'These combinations are affordable and easy to adapt.',
    },
  ],
  'locally-grown-produce': [
    {
      id: 'locally-grown-produce-1',
      author: 'Eleanor Pena',
      message: 'Our local market really does have the most flavorful vegetables.',
    },
    {
      id: 'locally-grown-produce-2',
      author: 'Jacob Jones',
      message: 'This encouraged me to learn more about farms in my area.',
    },
  ],
  'healthy-kitchen-ingredients': [
    {
      id: 'healthy-kitchen-ingredients-1',
      author: 'Kristin Watson',
      message: 'This is a useful checklist for stocking a healthier kitchen.',
    },
    {
      id: 'healthy-kitchen-ingredients-2',
      author: 'Cody Fisher',
      message: 'Keeping these basics at home has made weekday meals much faster.',
    },
    {
      id: 'healthy-kitchen-ingredients-3',
      author: 'Esther Howard',
      message: 'I added several of these ingredients to my next shopping list.',
    },
  ],
  'enjoy-fresh-vegetables': [
    {
      id: 'enjoy-fresh-vegetables-1',
      author: 'Leslie Alexander',
      message: 'Roasting vegetables with fresh herbs is now my favorite method.',
    },
  ],
  'storing-fruit-and-vegetables': [
    {
      id: 'storing-fruit-and-vegetables-1',
      author: 'Kathryn Murphy',
      message: 'I was storing tomatoes incorrectly. This guide helped a lot.',
    },
    {
      id: 'storing-fruit-and-vegetables-2',
      author: 'Ronald Richards',
      message: 'Keeping produce visible has already helped us reduce food waste.',
    },
    {
      id: 'storing-fruit-and-vegetables-3',
      author: 'Darrell Steward',
      message: 'The advice about leafy greens was exactly what I needed.',
    },
    {
      id: 'storing-fruit-and-vegetables-4',
      author: 'Bessie Cooper',
      message: 'Our fruit stays fresh noticeably longer after following these tips.',
    },
  ],
  'seasonal-family-recipes': [
    {
      id: 'seasonal-family-recipes-1',
      author: 'Annette Black',
      message: 'The colorful meal ideas were a big success with my children.',
    },
    {
      id: 'seasonal-family-recipes-2',
      author: 'Jerome Bell',
      message: 'We tried the roasted vegetables and everyone enjoyed them.',
    },
  ],
  'farm-to-table': [
    {
      id: 'farm-to-table-1',
      author: 'Floyd Miles',
      message: 'It was interesting to learn how many steps protect food freshness.',
    },
    {
      id: 'farm-to-table-2',
      author: 'Savannah Nguyen',
      message: 'This gave me a new appreciation for local farmers and producers.',
    },
    {
      id: 'farm-to-table-3',
      author: 'Ralph Edwards',
      message: 'The explanation of the transport process was very interesting.',
    },
  ],
  'healthy-green-lifestyle': [
    {
      id: 'healthy-green-lifestyle-1',
      author: 'Wade Warren',
      message: 'Small consistent changes really are easier to maintain.',
    },
  ],
};

export function getMockBlogComments(slug: string): BlogComment[] {
  return MOCK_COMMENTS_BY_SLUG[slug] ?? [];
}
