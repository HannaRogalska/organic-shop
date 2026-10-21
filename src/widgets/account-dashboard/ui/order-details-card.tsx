'use client';

import { useFormatter, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

import type { OrderDetails } from '@/entities/order/api/get-order-details';
import type { UserAddress } from '@/entities/user/api/get-user-address';
import { useFormatPrice } from '@/shared/lib/i18n/use-format-price';

type OrderDetailsCardProps = {
  order: OrderDetails;
  address: UserAddress | null;
  email: string;
};
const orderProgressSteps = [
  {
    status: 'pending',
    labelKey: 'progressPending',
  },
  {
    status: 'paid',
    labelKey: 'progressPaid',
  },
  {
    status: 'shipped',
    labelKey: 'progressShipped',
  },
] as const;

function getCurrentStepIndex(status: OrderDetails['status']): number {
  return orderProgressSteps.findIndex((step) => step.status === status);
}

function getOrderNumber(id: string): string {
  return `#${id.slice(0, 8).toUpperCase()}`;
}

export function OrderDetailsCard({ order, address, email }: OrderDetailsCardProps) {
  const t = useTranslations('AccountPage');
  const format = useFormatter();
  const formatPrice = useFormatPrice();
  const currentStepIndex = getCurrentStepIndex(order.status);

  return (
    <section
      aria-labelledby="order-details-title"
      className="overflow-hidden rounded-lg border border-gray-100 bg-background"
    >
      <header className="flex flex-col gap-3 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <h1 id="order-details-title" className="text-xl font-medium text-gray-900">
            {t('orderDetails.title')}
          </h1>

          <span aria-hidden="true" className="text-gray-400">
            •
          </span>

          <time dateTime={order.createdAt.toISOString()} className="text-sm text-gray-600">
            {format.dateTime(order.createdAt, {
              dateStyle: 'medium',
            })}
          </time>

          <span aria-hidden="true" className="text-gray-400">
            •
          </span>

          <span className="text-sm text-gray-600">
            {t('orderDetails.productCount', {
              count: order.items.length,
            })}
          </span>
        </div>

        <Link
          href="/account/orders"
          className="text-sm font-medium text-primary hover:text-hard-primary"
        >
          {t('orderDetails.backToList')}
        </Link>
      </header>
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <section
          aria-labelledby="contact-details-title"
          className="border-b border-gray-100 p-6 lg:border-r lg:border-b-0"
        >
          <h2
            id="contact-details-title"
            className="text-sm font-medium tracking-wide text-gray-500 uppercase"
          >
            {t('orderDetails.contactDetails')}
          </h2>

          {address ? (
            <address className="mt-4 space-y-1 text-sm text-gray-600 not-italic">
              <p className="font-medium text-gray-900">
                {address.firstName} {address.lastName}
              </p>

              <p>{address.streetAddress}</p>

              <p>
                {address.zipCode} {address.city}
                {address.state ? `, ${address.state}` : ''}
              </p>

              <dl className="mt-4 space-y-2">
                <div>
                  <dt className="text-xs text-gray-500">{t('orderDetails.email')}</dt>
                  <dd className="text-gray-900">{email}</dd>
                </div>

                <div>
                  <dt className="text-xs text-gray-500">{t('orderDetails.phone')}</dt>
                  <dd className="text-gray-900">{address.phone}</dd>
                </div>
              </dl>
            </address>
          ) : (
            <div className="mt-4">
              <p className="text-sm text-gray-500">{t('orderDetails.addressUnavailable')}</p>
              <p className="mt-3 text-sm text-gray-900">{email}</p>
            </div>
          )}
        </section>

        <dl className="grid gap-6 p-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-gray-500">{t('orderDetails.orderId')}</dt>
            <dd className="mt-1 font-medium text-gray-900">{getOrderNumber(order.id)}</dd>
          </div>

          <div>
            <dt className="text-sm text-gray-500">{t('orderDetails.date')}</dt>
            <dd className="mt-1 font-medium text-gray-900">
              {format.dateTime(order.createdAt, {
                dateStyle: 'medium',
              })}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-gray-500">{t('orderDetails.status')}</dt>
            <dd className="mt-1 font-medium text-gray-900">
              {t(`recentOrders.statuses.${order.status}`)}
            </dd>
          </div>

          <div>
            <dt className="text-sm text-gray-500">{t('orderDetails.total')}</dt>
            <dd className="mt-1 font-medium text-gray-900">
              {formatPrice(Number(order.totalAmount))}
            </dd>
          </div>
        </dl>
      </div>
      <div
        aria-label={t('orderDetails.progressLabel')}
        className="border-t border-gray-100 px-6 py-8"
      >
        <ol className="grid grid-cols-3">
          {orderProgressSteps.map((step, index) => {
            const isReached = index <= currentStepIndex;
            const isCompleted = index < currentStepIndex;

            return (
              <li
                key={step.status}
                className="relative flex flex-col items-center gap-3 text-center"
                aria-current={index === currentStepIndex ? 'step' : undefined}
              >
                {index < orderProgressSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className={`absolute top-4 left-1/2 h-1 w-full ${
                      isCompleted ? 'bg-primary' : 'bg-green-gray-100'
                    }`}
                  />
                ) : null}

                <span
                  aria-hidden="true"
                  className={`relative z-10 grid size-8 place-items-center rounded-full border-2 text-sm font-medium ${
                    isReached
                      ? 'border-primary bg-primary text-white'
                      : 'border-green-gray-100 bg-background text-gray-500'
                  }`}
                >
                  {index + 1}
                </span>

                <span
                  className={`text-sm font-medium ${isReached ? 'text-primary' : 'text-gray-500'}`}
                >
                  {t(`orderDetails.${step.labelKey}`)}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
      {order.items.length > 0 ? (
        <div className="overflow-x-auto border-t border-gray-100">
          <table className="w-full min-w-150 border-collapse text-left text-sm">
            <thead className="bg-gray-50 text-xs font-medium text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {t('orderDetails.product')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('orderDetails.price')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('orderDetails.quantity')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('orderDetails.subtotal')}
                </th>
              </tr>
            </thead>

            <tbody>
              {order.items.map((item) => {
                const singlePrice = Number(item.singlePrice);
                const subtotal = singlePrice * item.quantity;

                return (
                  <tr key={item.id} className="border-t border-gray-100">
                    <th scope="row" className="px-6 py-3 font-normal">
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt=""
                          width={60}
                          height={60}
                          className="size-15 object-contain"
                        />

                        <span className="text-gray-900">{item.title}</span>
                      </div>
                    </th>

                    <td className="px-6 py-3 text-gray-900">{formatPrice(singlePrice)}</td>

                    <td className="px-6 py-3 text-gray-600">×{item.quantity}</td>

                    <td className="px-6 py-3 font-medium text-gray-900">{formatPrice(subtotal)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="border-t border-gray-100 px-6 py-10 text-center text-sm text-gray-500">
          {t('orderDetails.emptyItems')}
        </p>
      )}
    </section>
  );
}
