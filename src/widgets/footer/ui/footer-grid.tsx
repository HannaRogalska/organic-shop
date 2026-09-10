import { Brand } from '@/shared/ui/brand/brand';
import { Link } from '@/i18n/navigation';
import { footerColumns } from '../model/constants';
import { DownloadApps } from './download-apps';
import { useTranslations } from 'next-intl';

type FooterSectionProps = {
  variant: 'home' | 'inner';
};

export function FooterGrid({ variant }: FooterSectionProps) {
  const t = useTranslations('Footer.grid');
  const isInner = variant === 'inner';
  return (
    <section className={isInner ? 'bg-gray-900' : 'bg-gray-50'}>
      <div className="mx-auto grid w-full max-w-330 grid-cols-3 gap-8 px-5 py-10 lg:grid-cols-[3fr_repeat(3,1fr)_3fr] lg:px-15 lg:py-15">
        <div className="col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-1">
          <div className="mx-auto sm:mx-0">
            <Brand color={isInner ? 'inverse' : 'default'} />
          </div>
          <p className="mt-4 w-full text-center text-base text-gray-500 lg:text-left">
            {t('description')}
          </p>
          <address className="mt-4 flex flex-row not-italic items-center justify-center gap-3 text-sm lg:justify-start">
            <a
              href="tel:+12195550114"
              className={`border-b-2 border-primary pb-1 font-medium ${
                isInner ? 'text-background' : 'text-gray-900'
              }`}
            >
              (219) 555-0114
            </a>
            <span className="text-base text-gray-500">{t('contactSeparator')}</span>
            <a
              href="mailto:proxy@gmail.com"
              className={`border-b-2 border-primary pb-1 font-medium ${
                isInner ? 'text-background' : 'text-gray-900'
              }`}
            >
              Proxy@gmail.com
            </a>
          </address>
        </div>

        {footerColumns.map((column) => (
          <div key={column.titleKey} className="col-span-1">
            <div className="w-full text-center lg:text-left">
              <h3
                className={`text-base font-medium ${isInner ? 'text-background' : 'text-gray-900'}`}
              >
                {t(column.titleKey)}
              </h3>
              <ul
                className={`mt-4 flex flex-col items-center space-y-3 text-sm lg:items-start ${
                  isInner ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {column.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link href={link.href} className="hover:text-primary">
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="col-span-3 lg:col-span-1">
          <DownloadApps variant={variant} />
        </div>
      </div>
    </section>
  );
}
