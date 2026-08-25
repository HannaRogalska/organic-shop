import type { Currency } from '@/shared/model/currency-store';

const USD_TO_PLN_RATE = 4;

export function convertPriceFromUsd(value: number, currency: Currency): number {
  if (currency === 'USD') {
    return value;
  }

  return value * USD_TO_PLN_RATE;
}
