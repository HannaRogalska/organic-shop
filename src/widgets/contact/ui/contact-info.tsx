import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function ContactInfo() {
  const t = useTranslations('ContactPage.contactInfo');

  return (
    <aside
      aria-label={t('sectionLabel')}
      className="grid w-full grid-cols-3 rounded-lg bg-background px-2 shadow-[0_0_56px_rgba(0,38,3,0.08)] lg:w-78 lg:grid-cols-1 lg:px-5"
    >
      <section className="flex min-w-0 flex-col items-center gap-3 border-r border-gray-100 px-2 py-5 text-center lg:gap-4 lg:border-r-0 lg:border-b lg:px-0 lg:py-6">
        <h2 className="sr-only">{t('addressLabel')}</h2>
        <span className="flex size-13 items-center justify-center">
          <Image src="/images/contact/location.svg" alt="" width={34} height={44} />
        </span>
        <address className="flex w-full flex-col text-center text-xs leading-normal text-gray-800 not-italic lg:max-w-55 lg:text-base">
          {t('address')}
        </address>
      </section>
      <section className="flex min-w-0 flex-col items-center gap-3 border-r border-gray-100 px-2 py-5 text-center lg:gap-4 lg:border-r-0 lg:border-b lg:px-0 lg:py-6">
        <h2 className="sr-only">{t('emailLabel')}</h2>
        <span className="flex size-13 items-center justify-center">
          <Image src="/images/contact/email.svg" alt="" width={51} height={39} />
        </span>

        <address className="flex w-full flex-col break-all text-center text-xs leading-normal text-gray-800 not-italic lg:max-w-55 lg:text-base">
          <a href={`mailto:${t('primaryEmail')}`}>{t('primaryEmail')}</a>

          <a href={`mailto:${t('supportEmail')}`}>{t('supportEmail')}</a>
        </address>
      </section>
      <section className="flex min-w-0 flex-col items-center gap-3 px-2 py-5 text-center lg:gap-4 lg:px-0 lg:py-6">
        <h2 className="sr-only">{t('phoneLabel')}</h2>

        <span className="flex size-13 items-center justify-center">
          <Image src="/images/contact/phone.svg" alt="" width={42} height={42} />
        </span>

        <address className="flex w-full flex-col text-center text-xs leading-normal text-gray-800 not-italic lg:max-w-55 lg:text-base">
          <a href="tel:+12195550114">{t('primaryPhone')}</a>
          <a href="tel:+11643330487">{t('secondaryPhone')}</a>
        </address>
      </section>
    </aside>
  );
}
