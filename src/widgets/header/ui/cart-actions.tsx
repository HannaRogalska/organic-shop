import Image from 'next/image';
import Link from 'next/link';

export function CartActions() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/wishlist" aria-label="Wishlist" className="transition-opacity hover:opacity-70">
        <Image src="/images/header/heart.svg" alt="" width={32} height={32} />
      </Link>
      <span className="hidden h-6 w-px bg-gray-200 sm:block" aria-hidden="true" />
      <Link
        href="/cart"
        className="flex items-center gap-3"
        aria-label="Shopping cart, 2 items, total $57.00"
      >
        <span className="relative">
          <Image src="/images/header/bag.svg" alt="" width={34} height={34} />
          <span className="absolute -top-1 -right-2 grid size-4 place-items-center rounded-full border border-background bg-hard-primary text-xs leading-none font-medium text-white">
            2
          </span>
        </span>
        <span className="hidden flex-col gap-1 sm:flex">
          <span className="text-2xs leading-none text-gray-700">Shopping cart:</span>
          <span className="text-sm leading-none font-medium text-gray-900">$57.00</span>
        </span>
      </Link>
    </div>
  );
}
