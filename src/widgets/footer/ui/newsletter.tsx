import Image from 'next/image';
import { socialLinks } from '../model/constants';

export function Newsletter() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-15 lg:py-15">
        <div className="flex items-center gap-2">
          <Image src="/images/footer/newsletter.svg" alt="" width={56} height={56} />
          <div>
            <h2 className="text-xl leading-8 font-medium text-background sm:text-2xl">
              Subscribe our Newsletter
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Get the latest organic offers and product updates.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
          <form className="flex w-full max-w-115 overflow-hidden rounded-full bg-gray-800 sm:w-115">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-6 py-3.5 text-base text-background outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="m-1 shrink-0 rounded-full bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-hard-primary sm:px-10 sm:text-base"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-2" aria-label="Social media links">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="relative size-10 ">
                <Image
                  src={`/images/footer/${s.icon}`}
                  alt=""
                  fill
                  sizes="16px"
                  className="p-3 border border-none rounded-full hover:bg-hard-primary"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
