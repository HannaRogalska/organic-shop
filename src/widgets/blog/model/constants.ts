export const BLOG_GALLERY_IMAGES = Array.from(
  { length: 8 },
  (_, index) => `/images/blog/gallery/gallery-${index + 1}.png`
);

export const RECENT_POSTS = [
  {
    titleKey: 'firstTitle',
    image: '/images/blog/recent/recent-1.png',
    publishedAt: '2026-05-05',
  },
  {
    titleKey: 'secondTitle',
    image: '/images/blog/recent/recent-2.png',
    publishedAt: '2026-04-03',
  },
  {
    titleKey: 'thirdTitle',
    image: '/images/blog/recent/recent-3.png',
    publishedAt: '2026-01-15',
  },
] as const;

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'fresh-organic-vegetables',
    image: '/images/blog/posts/post-1.png',
    publishedAt: '2026-09-12',
    tags: ['healthy', 'vegetarian', 'vitamins', 'lunch', 'dinner'],
    translations: {
      en: {
        title: 'Fresh organic vegetables for healthy everyday meals.',
        lead: 'Fresh organic vegetables make everyday meals more colorful, nutritious, and full of natural flavor.',
        paragraphs: [
          'Vegetables grown with care and harvested at the right time retain their texture and distinctive taste. Choosing seasonal produce also makes it easier to create varied meals throughout the year.',
          'Add different colors to your plate, combine vegetables with whole grains and protein, and store fresh produce properly to preserve its quality for longer.',
        ],
      },
      pl: {
        title: 'Świeże warzywa ekologiczne do zdrowych codziennych posiłków.',
        lead: 'Świeże warzywa ekologiczne sprawiają, że codzienne posiłki są bardziej kolorowe, wartościowe i pełne naturalnego smaku.',
        paragraphs: [
          'Warzywa uprawiane z troską i zbierane w odpowiednim momencie zachowują swoją strukturę oraz charakterystyczny smak. Wybieranie produktów sezonowych ułatwia także przygotowywanie różnorodnych posiłków przez cały rok.',
          'Dodawaj na talerz produkty w różnych kolorach, łącz warzywa z pełnymi ziarnami i źródłem białka oraz przechowuj świeżą żywność w odpowiedni sposób.',
        ],
      },
    },
  },
  {
    id: 2,
    slug: 'seasonal-fruit',
    image: '/images/blog/posts/post-2.png',
    publishedAt: '2026-08-28',
    tags: ['healthy', 'lowFat', 'vegetarian', 'vitamins', 'snacks', 'kidsFood'],
    translations: {
      en: {
        title: 'How to choose seasonal fruit at its best.',
        lead: 'Seasonal fruit offers the best balance of freshness, flavor, and nutritional value.',
        paragraphs: [
          'Look for fruit with a natural aroma, an even color, and a texture appropriate for its variety. Produce that is in season usually travels a shorter distance and reaches the store sooner.',
          'Buy only the amount you can use, keep delicate fruit refrigerated, and allow firm fruit to ripen naturally at room temperature.',
        ],
      },
      pl: {
        title: 'Jak wybierać najlepsze owoce sezonowe.',
        lead: 'Owoce sezonowe oferują najlepsze połączenie świeżości, smaku i wartości odżywczych.',
        paragraphs: [
          'Wybieraj owoce o naturalnym aromacie, równomiernym kolorze i strukturze odpowiedniej dla danej odmiany. Produkty sezonowe zwykle pokonują krótszą drogę i szybciej trafiają do sklepu.',
          'Kupuj tyle, ile możesz wykorzystać, delikatne owoce przechowuj w lodówce, a twardszym pozwól naturalnie dojrzewać w temperaturze pokojowej.',
        ],
      },
    },
  },
  {
    id: 3,
    slug: 'nutritious-homemade-food',
    image: '/images/blog/posts/post-3.png',
    publishedAt: '2026-08-10',
    tags: ['healthy', 'tiffin', 'lunch', 'dinner'],
    translations: {
      en: {
        title: 'Simple ideas for nutritious homemade food.',
        lead: 'Nutritious homemade food can be simple, affordable, and enjoyable to prepare.',
        paragraphs: [
          'Start with a small selection of versatile ingredients such as vegetables, grains, beans, eggs, and fresh herbs. They can be combined into soups, salads, bowls, and warm main dishes.',
          'Planning several meals in advance saves time and helps reduce waste while still leaving space for variety during the week.',
        ],
      },
      pl: {
        title: 'Proste pomysły na wartościowe domowe jedzenie.',
        lead: 'Wartościowe domowe jedzenie może być proste, niedrogie i przyjemne w przygotowaniu.',
        paragraphs: [
          'Zacznij od kilku uniwersalnych składników, takich jak warzywa, kasze, rośliny strączkowe, jajka i świeże zioła. Można z nich przygotować zupy, sałatki, miski oraz ciepłe dania.',
          'Planowanie kilku posiłków z wyprzedzeniem oszczędza czas, ogranicza marnowanie żywności i nadal pozwala zachować różnorodność w ciągu tygodnia.',
        ],
      },
    },
  },
  {
    id: 4,
    slug: 'locally-grown-produce',
    image: '/images/blog/posts/post-4.png',
    publishedAt: '2026-07-19',
    tags: ['healthy', 'vegetarian', 'vitamins'],
    translations: {
      en: {
        title: 'Why locally grown produce tastes better.',
        lead: 'Locally grown produce often reaches your table sooner and with more of its natural character.',
        paragraphs: [
          'Shorter transportation routes allow farmers to harvest fruit and vegetables closer to peak ripeness. This can improve their texture, aroma, and overall flavor.',
          'Buying locally also helps you learn what is currently in season and supports producers working in your surrounding community.',
        ],
      },
      pl: {
        title: 'Dlaczego lokalne produkty smakują lepiej.',
        lead: 'Lokalnie uprawiane produkty często szybciej trafiają na stół i zachowują więcej swojego naturalnego charakteru.',
        paragraphs: [
          'Krótszy transport pozwala rolnikom zbierać owoce i warzywa bliżej momentu pełnej dojrzałości. Dzięki temu mogą mieć lepszą strukturę, aromat i smak.',
          'Kupowanie lokalnych produktów pomaga również poznawać aktualny sezon i wspiera producentów działających w najbliższej okolicy.',
        ],
      },
    },
  },
  {
    id: 5,
    slug: 'healthy-kitchen-ingredients',
    image: '/images/blog/posts/post-5.png',
    publishedAt: '2026-06-30',
    tags: ['healthy', 'lowFat', 'vegetarian', 'vitamins'],
    translations: {
      en: {
        title: 'Healthy ingredients that belong in every kitchen.',
        lead: 'A well-stocked kitchen makes preparing balanced meals faster and easier.',
        paragraphs: [
          'Keep whole grains, legumes, nuts, seeds, herbs, and healthy oils alongside a rotating selection of fresh vegetables and fruit.',
          'These basic ingredients provide flexibility, allowing you to prepare nutritious breakfasts, lunches, and dinners without relying on highly processed products.',
        ],
      },
      pl: {
        title: 'Zdrowe składniki, które warto mieć w każdej kuchni.',
        lead: 'Dobrze zaopatrzona kuchnia ułatwia szybkie przygotowywanie zbilansowanych posiłków.',
        paragraphs: [
          'Warto mieć pod ręką pełne ziarna, rośliny strączkowe, orzechy, nasiona, zioła i zdrowe oleje, a także regularnie uzupełniać zapas świeżych warzyw i owoców.',
          'Te podstawowe składniki pozwalają przygotować wartościowe śniadania, obiady i kolacje bez nadmiernego korzystania z wysoko przetworzonych produktów.',
        ],
      },
    },
  },
  {
    id: 6,
    slug: 'enjoy-fresh-vegetables',
    image: '/images/blog/posts/post-6.png',
    publishedAt: '2026-06-14',
    tags: ['healthy', 'lowFat', 'vegetarian', 'lunch', 'dinner'],
    translations: {
      en: {
        title: 'Easy ways to make fresh vegetables more enjoyable.',
        lead: 'Fresh vegetables become more enjoyable when you experiment with texture, seasoning, and preparation.',
        paragraphs: [
          'Try roasting vegetables to bring out their sweetness, grilling them for a smoky flavor, or serving them raw for extra crunch.',
          'Simple dressings, fresh herbs, spices, and citrus juice can transform familiar vegetables without overwhelming their natural taste.',
        ],
      },
      pl: {
        title: 'Jak w prosty sposób polubić świeże warzywa.',
        lead: 'Świeże warzywa stają się ciekawsze, gdy eksperymentujesz z ich strukturą, przyprawami i sposobem przygotowania.',
        paragraphs: [
          'Spróbuj piec warzywa, aby wydobyć ich słodycz, grillować je dla dymnego aromatu albo podawać na surowo, by zachować chrupkość.',
          'Proste sosy, świeże zioła, przyprawy i sok z cytrusów mogą odmienić znane warzywa, nie tłumiąc ich naturalnego smaku.',
        ],
      },
    },
  },
  {
    id: 7,
    slug: 'storing-fruit-and-vegetables',
    image: '/images/blog/posts/post-7.png',
    publishedAt: '2026-05-22',
    tags: ['healthy', 'vitamins'],
    translations: {
      en: {
        title: 'A practical guide to storing fruit and vegetables.',
        lead: 'Proper storage helps fruit and vegetables stay fresh, appealing, and useful for longer.',
        paragraphs: [
          'Leafy greens benefit from a cool environment and controlled moisture, while tomatoes and some firm fruit develop better flavor at room temperature.',
          'Keep produce visible, check it regularly, and use the most delicate items first when planning your next meals.',
        ],
      },
      pl: {
        title: 'Praktyczny przewodnik po przechowywaniu owoców i warzyw.',
        lead: 'Prawidłowe przechowywanie pomaga owocom i warzywom dłużej zachować świeżość, wygląd i przydatność.',
        paragraphs: [
          'Warzywa liściaste potrzebują chłodu i odpowiedniej wilgotności, natomiast pomidory oraz niektóre twardsze owoce rozwijają lepszy smak w temperaturze pokojowej.',
          'Przechowuj produkty w widocznym miejscu, regularnie sprawdzaj ich stan i podczas planowania posiłków najpierw wykorzystuj najbardziej delikatne składniki.',
        ],
      },
    },
  },
  {
    id: 8,
    slug: 'seasonal-family-recipes',
    image: '/images/blog/posts/post-8.png',
    publishedAt: '2026-04-17',
    tags: ['kidsFood', 'tiffin', 'lunch', 'dinner'],
    translations: {
      en: {
        title: 'Colorful seasonal recipes for the whole family.',
        lead: 'Seasonal recipes bring natural color and variety to meals shared with the whole family.',
        paragraphs: [
          'Choose ingredients that are currently abundant and combine familiar flavors with one new vegetable or fruit to keep meals interesting.',
          'Colorful soups, salads, roasted vegetables, and fruit-based desserts are simple ways to involve everyone in healthier eating.',
        ],
      },
      pl: {
        title: 'Kolorowe sezonowe przepisy dla całej rodziny.',
        lead: 'Sezonowe przepisy wprowadzają naturalne kolory i różnorodność do posiłków przygotowywanych dla całej rodziny.',
        paragraphs: [
          'Wybieraj składniki, których aktualnie jest najwięcej, i łącz znane smaki z jednym nowym warzywem lub owocem.',
          'Kolorowe zupy, sałatki, pieczone warzywa i desery owocowe to proste sposoby na zaangażowanie całej rodziny w zdrowsze odżywianie.',
        ],
      },
    },
  },
  {
    id: 9,
    slug: 'farm-to-table',
    image: '/images/blog/posts/post-9.png',
    publishedAt: '2026-03-09',
    tags: ['healthy', 'vegetarian'],
    translations: {
      en: {
        title: 'From the farm to your table: keeping food fresh.',
        lead: 'Freshness depends on every stage of the journey from the farm to your table.',
        paragraphs: [
          'Careful harvesting, suitable packaging, controlled temperatures, and efficient transportation all help protect the quality of fresh food.',
          'At home, correct storage and thoughtful meal planning complete that journey and prevent good ingredients from being wasted.',
        ],
      },
      pl: {
        title: 'Od gospodarstwa na stół: jak zachować świeżość żywności.',
        lead: 'Świeżość zależy od każdego etapu drogi produktu z gospodarstwa na Twój stół.',
        paragraphs: [
          'Ostrożne zbiory, odpowiednie opakowanie, kontrolowana temperatura i sprawny transport pomagają chronić jakość świeżej żywności.',
          'W domu tę drogę uzupełniają prawidłowe przechowywanie i rozsądne planowanie posiłków, które zapobiegają marnowaniu dobrych składników.',
        ],
      },
    },
  },
  {
    id: 10,
    slug: 'healthy-green-lifestyle',
    image: '/images/blog/posts/post-10.png',
    publishedAt: '2026-02-01',
    tags: ['healthy', 'lowFat', 'vegetarian'],
    translations: {
      en: {
        title: 'Everyday habits for a healthier and greener lifestyle.',
        lead: 'Small everyday choices can support both personal health and a more sustainable lifestyle.',
        paragraphs: [
          'Plan meals, choose seasonal products, use reusable bags, and reduce unnecessary packaging whenever practical.',
          'Consistent habits matter more than perfection. Even modest changes can reduce waste and make healthy choices easier over time.',
        ],
      },
      pl: {
        title: 'Codzienne nawyki wspierające zdrowszy i bardziej ekologiczny styl życia.',
        lead: 'Niewielkie codzienne wybory mogą wspierać zdrowie i bardziej zrównoważony styl życia.',
        paragraphs: [
          'Planuj posiłki, wybieraj produkty sezonowe, korzystaj z toreb wielokrotnego użytku i ograniczaj zbędne opakowania, gdy jest to możliwe.',
          'Regularność ma większe znaczenie niż perfekcja. Nawet niewielkie zmiany mogą z czasem ograniczyć ilość odpadów i ułatwić podejmowanie zdrowych decyzji.',
        ],
      },
    },
  },
] as const;

export type BlogPost = (typeof BLOG_POSTS)[number];
