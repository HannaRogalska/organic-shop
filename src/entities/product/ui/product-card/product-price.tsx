type ProductPriceProps = {
  price: number;
  currency: string;
  locale: string;
};

export function ProductPrice({ price, currency, locale }: ProductPriceProps) {
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
