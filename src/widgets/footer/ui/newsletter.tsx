import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { socialLinks } from '../model/constants';
import { NewsletterForm } from './newsletter-form';

type FooterSectionProps = {
  variant: 'home' | 'inner';
};

export function Newsletter({ variant }: FooterSectionProps) {
  const t = useTranslations('Footer.newsletter');
  const isInner = variant === 'inner';
  return (
    <section className={isInner ? 'bg-gray-50' : 'bg-gray-900'}>
      <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-8 px-5 py-10 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-15 lg:py-15">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:text-left">
          {!isInner && <Image src="/images/footer/newsletter.svg" alt="" width={56} height={56} />}
          <div>
            <h2
              className={`leading-8 ${
                isInner
                  ? 'text-2xl font-semibold text-gray-900'
                  : 'text-xl font-medium text-background sm:text-2xl'
              }`}
            >
              {t('title')}
            </h2>
            <p className={`mt-1 text-sm ${isInner ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('description')}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-5 xl:flex-row xl:items-center">
          <NewsletterForm variant={variant} />

          <nav className="flex justify-center gap-2" aria-label={t('socialMediaLabel')}>
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
