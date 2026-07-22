import Image from 'next/image';
import Link from 'next/link';

export function HeaderTopBar() {
  return (
    <div className="hidden border-b border-gray-100 lg:block">
      <div className="mx-auto flex h-13 w-full max-w-330 items-center justify-between px-6 text-xs text-gray-600 xl:px-0">
        <p className="flex items-center gap-2">
          <Image src="/images/header/map-pin.svg" alt="" width={15} height={18} />
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        <div className="flex items-center gap-5">
          <label className="flex items-center gap-1.5">
            <span className="sr-only">Language</span>
            <select className="appearance-none bg-transparent pr-3 outline-none" defaultValue="ENG">
              <option>ENG</option>
              <option>POL</option>
            </select>
          </label>
          <label className="flex items-center gap-1.5">
            <span className="sr-only">Currency</span>
            <select className="appearance-none bg-transparent pr-3 outline-none" defaultValue="USD">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </label>
          <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
          <div className="flex gap-1">
            <Link href="/sign-in" className="hover:text-primary">
              Sign In
            </Link>
            <span>/</span>
            <Link href="/sign-up" className="hover:text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
