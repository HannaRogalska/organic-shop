import Image from 'next/image';
import { socialLinks } from '../model/constants';
import { NewsletterForm } from './newsletter-form';

export function Newsletter() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-8 px-5 py-10 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-15 lg:py-15">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:text-left">
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

        <div className="flex w-full flex-col items-center gap-5 xl:flex-row xl:items-center">
          <NewsletterForm />

          <nav className="flex justify-center gap-2" aria-label="Social media links">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="relative size-10 ">
                <Image
                  src={`/images/footer/${s.icon}`}
                  alt=""
                  fill
                  sizes="16px"
                  className="p-3 border border-none rounded-full hover:bg-primary"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
