import { useTranslations } from 'next-intl';

import type { UserAddress } from '@/entities/user/api/get-user-address';

type BillingAddressCardProps = {
  address: UserAddress | null;
  email: string;
};

function getCityLine(address: UserAddress): string {
  return [address.city, address.state, address.zipCode].filter(Boolean).join(', ');
}

export function BillingAddressCard({ address, email }: BillingAddressCardProps) {
  const t = useTranslations('AccountPage.billingAddress');

  return (
    <article
      aria-label={t('label')}
      className="min-h-60 rounded-lg border border-gray-100 bg-background p-8"
    >
      <h2 className="text-sm font-medium tracking-wide text-gray-400 uppercase">{t('title')}</h2>

      {address ? (
        <div className="mt-5">
          <p className="text-lg font-medium text-gray-900">
            {address.firstName} {address.lastName}
          </p>

          <address className="mt-2 flex flex-col gap-2 text-sm not-italic text-gray-600">
            <span>{address.streetAddress}</span>
            <span>{getCityLine(address)}</span>
            <span>{email}</span>
            <span>{address.phone}</span>
          </address>
        </div>
      ) : (
        <p className="mt-5 text-sm text-gray-500">{t('empty')}</p>
      )}
    </article>
  );
}
