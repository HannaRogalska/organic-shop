type ProductPriceProps = {
  price: number | null;
  currency: string;
  locale: string;
};

export function ProductPrice({ price, currency, locale }: ProductPriceProps) {
  if (price === null) {
    return <span className="text-sm leading-normal text-gray-500">Цена недоступна</span>;
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  });

  return (
    <span className="text-base leading-normal font-medium text-gray-900">
      {formatter.format(price)}
    </span>
  );
}
