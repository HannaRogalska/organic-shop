import Image from 'next/image';
import { useTranslations } from 'next-intl';

type FooterSectionProps = {
  variant: 'home' | 'inner';
};

function PaymentMethod({ src, alt, width = 60 }: { src: string; alt: string; width?: number }) {
  return (
    <span
      className="grid h-8 place-items-center rounded-sm border border-gray-200 bg-background"
      style={{ width }}
    >
      <Image src={src} alt={alt} width={width - 12} height={20} className="max-h-5" />
    </span>
  );
}

export function BottomBar({ variant }: FooterSectionProps) {
  const t = useTranslations('Footer.bottomBar');
  const isInner = variant === 'inner';
  const currentYear = new Date().getFullYear();
  return (
    <div className={isInner ? 'bg-gray-900' : 'bg-background'}>
      <div
        className={`mx-auto flex w-full max-w-330 flex-col items-center p-6 lg:flex-row lg:justify-between ${
          isInner ? 'border-t border-gray-800' : ''
        }`}
      >
        <p className="mb-3 text-sm text-gray-500 lg:mb-0">
          {t('copyright', { year: currentYear })}
        </p>
        <div className="flex flex-wrap items-center gap-2" aria-label={t('paymentMethods')}>
          <PaymentMethod src="/images/footer/apple-pay.svg" alt="Apple Pay" />
          <PaymentMethod src="/images/footer/visa.svg" alt="Visa" width={44} />
          <PaymentMethod src="/images/footer/discover.svg" alt="Discover" width={44} />
          <span className="flex h-8 w-16.25 flex-col items-center justify-center rounded-sm border border-gray-200 bg-background text-[11px] leading-none text-gray-900">
            <span className="flex items-center gap-1">
              <Image src="/images/footer/lock.svg" alt="" width={11} height={11} /> Secure
            </span>
            <strong className="mt-1 text-xs">Payment</strong>
          </span>
          <PaymentMethod src="/images/footer/mastercard.svg" alt="Mastercard" />
        </div>
      </div>
    </div>
  );
}
