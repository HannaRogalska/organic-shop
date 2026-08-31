import Image from 'next/image';
import { useTranslations } from 'next-intl';

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

export function BottomBar() {
  const t = useTranslations('Footer.bottomBar');
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-background">
      <div className="mx-auto flex lg:flex-row flex-col items-center lg:justify-between w-full max-w-330 p-6">
        <p className="text-sm text-gray-500 mb-3">{t('copyright', { year: currentYear })}</p>
        <div
          role="group"
          aria-label={t('paymentMethods')}
          className="flex flex-wrap items-center gap-2"
        >
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
