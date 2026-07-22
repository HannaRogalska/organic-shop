import Image from 'next/image';

export function SearchForm() {
  return (
    <form className="flex h-11 w-full overflow-hidden rounded-md border border-gray-100 bg-background sm:h-12">
      <label className="sr-only" htmlFor="site-search">
        Search products
      </label>
      <div className="flex min-w-0 flex-1 items-center gap-2 px-4">
        <Image src="/images/header/search.svg" alt="" width={20} height={20} />
        <input
          id="site-search"
          name="search"
          type="search"
          placeholder="Search"
          className="min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
        />
      </div>
      <button
        type="submit"
        className="bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-hard-primary"
      >
        Search
      </button>
    </form>
  );
}
