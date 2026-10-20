'use client';

import { useFormatter, useTranslations } from 'next-intl';

import type { RecentOrder } from '@/entities/order/api/get-recent-orders';
import { Link } from '@/i18n/navigation';
import { useFormatPrice } from '@/shared/lib/i18n/use-format-price';

type RecentOrdersTableProps = {
  orders: RecentOrder[];
  title?: string;
  showViewAll?: boolean;
};

function getOrderNumber(id: string): string {
  return `#${id.slice(0, 8).toUpperCase()}`;
}

export function RecentOrdersTable({ orders, title, showViewAll = true }: RecentOrdersTableProps) {
  const t = useTranslations('AccountPage.recentOrders');
  const format = useFormatter();
  const formatPrice = useFormatPrice();

  return (
    <section
      aria-label={t('label')}
      className="overflow-hidden rounded-lg border border-gray-100 bg-background"
    >
      <header className="flex items-center justify-between gap-4 px-6 py-5">
        <h2 className="text-xl font-medium text-gray-900">{title ?? t('title')}</h2>

        {showViewAll && orders.length > 0 ? (
          <Link
            href="/account/orders"
            className="text-sm font-medium text-primary hover:text-hard-primary"
          >
            {t('viewAll')}
          </Link>
        ) : null}
      </header>

      {orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-180 border-collapse text-left text-sm">
            <thead className="bg-gray-50 text-xs font-medium text-gray-700 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {t('orderId')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('date')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('total')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('status')}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t('details')}
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const orderNumber = getOrderNumber(order.id);

                return (
                  <tr key={order.id} className="border-t border-gray-100 text-gray-700">
                    <td className="px-6 py-4 text-gray-800">{orderNumber}</td>

                    <td className="px-6 py-4">
                      {format.dateTime(order.createdAt, {
                        dateStyle: 'medium',
                      })}
                    </td>

                    <td className="px-6 py-4">
                      {formatPrice(Number(order.totalAmount))}{' '}
                      <span className="text-gray-500">
                        ({t('itemCount', { count: order.itemCount })})
                      </span>
                    </td>

                    <td className="px-6 py-4">{t(`statuses.${order.status}`)}</td>

                    <td className="px-6 py-4">
                      <Link
                        href={`/account/orders/${order.id}`}
                        aria-label={t('viewDetails', {
                          id: orderNumber,
                        })}
                        className="font-medium text-primary hover:text-hard-primary"
                      >
                        {t('details')}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="border-t border-gray-100 px-6 py-10 text-center text-sm text-gray-500">
          {t('empty')}
        </p>
      )}
    </section>
  );
}
