import Image from 'next/image';
import { useTranslations } from 'next-intl';

type DownloadAppsProps = {
  variant: 'home' | 'inner';
};

export function DownloadApps({ variant }: DownloadAppsProps) {
  const t = useTranslations('Footer.downloadApps');
  const isInner = variant === 'inner';
  return (
    <div className="text-center lg:text-left">
      <h3 className={`text-base font-medium ${isInner ? 'text-background' : 'text-gray-900'}`}>
        {t('title')}
      </h3>
      <div className="mt-4 flex flex-row flex-wrap justify-center gap-2 lg:justify-start">
        <a
          href="#app-store"
          aria-label={t('appStoreLabel')}
          className="flex items-center gap-2 bg-background p-3"
        >
          <Image src="/images/footer/apple-store.svg" alt="" width={28} height={28} />
          <span className="flex flex-col text-left">
            <span className="text-xs text-gray-700">{t('downloadOn')}</span>
            <span className="text-base font-medium text-gray-900">App Store</span>
          </span>
        </a>
        <a
          href="#google-play"
          aria-label={t('googlePlayLabel')}
          className="flex items-center gap-2 bg-background p-3"
        >
          <Image src="/images/footer/google-play.svg" alt="" width={28} height={28} />
          <span className="flex flex-col text-left">
            <span className="text-xs text-gray-700">{t('downloadOn')}</span>
            <span className="text-base font-medium text-gray-900">Google Play</span>
          </span>
        </a>
      </div>
    </div>
  );
}
