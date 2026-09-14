import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function AboutIntro() {
  const t = useTranslations('AboutPage.intro');

  return (
    <section className="mx-auto grid w-full max-w-330 items-center gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 xl:px-0">
      <div>
        <h1 className="text-4xl leading-tight font-semibold text-gray-900 sm:text-5xl">
          {t('title')}
        </h1>

        <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
          {t('description')}
        </p>
      </div>

      <Image
        src="/images/about/trusted-store.png"
        alt={t('imageAlt')}
        width={716}
        height={492}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full rounded-lg object-cover"
      />
    </section>
  );
}
