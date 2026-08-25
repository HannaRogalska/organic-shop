'use client';
import type { ChangeEvent } from 'react';
import { useCurrencyStore, type Currency } from '@/shared/model/currency-store';

function isCurrency(value: string): value is Currency {
  return value === 'USD' || value === 'PLN';
}

function handleCurrencyChange(
  event: ChangeEvent<HTMLSelectElement>,
  setCurrency: (currency: Currency) => void
) {
  const nextCurrency = event.target.value;

  if (isCurrency(nextCurrency)) {
    setCurrency(nextCurrency);
  }
}

export function CurrencySelect() {
  const currency = useCurrencyStore((state) => state.currency);
  const setCurrency = useCurrencyStore((state) => state.setCurrency);

  return (
    <select
      className="appearance-none bg-transparent pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      value={currency}
      onChange={(event) => handleCurrencyChange(event, setCurrency)}
    >
      <option value="USD">USD</option>
      <option value="PLN">PLN</option>
    </select>
  );
}
