'use client';
import { useCurrencyStore } from '@/shared/model/currency-store';
import { useFormatter } from 'next-intl';
import { convertPriceFromUsd } from '@/shared/lib/currency/convert-price';

export function useFormatPrice() {
  const format = useFormatter();
  const currency = useCurrencyStore((state) => state.currency);
  return function formatPrice(value: number) {
    const convertedValue = convertPriceFromUsd(value, currency);

    return format.number(convertedValue, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    });
  };
}
