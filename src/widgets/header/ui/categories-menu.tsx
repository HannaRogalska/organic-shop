import Image from 'next/image';
import Link from 'next/link';

import { categories } from '../model/constants';

export function CategoriesMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={`group relative ${mobile ? 'w-full' : ''}`}>
      <summary
        className={`flex cursor-pointer list-none items-center gap-3 text-sm font-medium marker:content-none ${
          mobile ? 'justify-between py-3 text-gray-900' : 'h-14 bg-gray-800 px-5 text-white'
        }`}
      >
        {!mobile ? (
          <Image
            src="/images/header/burger.svg"
            alt=""
            width={24}
            height={24}
            className="brightness-0 invert"
          />
        ) : null}

        <div className="flex-1">All Categories</div>

        <Image
          src="/images/header/nav-chevron.svg"
          alt=""
          width={10}
          height={10}
          className="transition-transform group-open:rotate-180"
        />
      </summary>
      <ul
        className={`z-20 divide-y divide-gray-100 bg-background shadow-lg ${mobile ? 'static' : 'absolute top-full left-0 w-72'}`}
      >
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/shop?category=${encodeURIComponent(category.img)}`}
              className="block px-5 py-3 text-sm text-gray-800 hover:bg-green-gray-50 hover:text-primary"
            >
              <div className="flex items-center gap-3">
                {category.img ? (
                  <Image
                    src={category.img}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                ) : null}
                <span className="leading-none">{category.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
