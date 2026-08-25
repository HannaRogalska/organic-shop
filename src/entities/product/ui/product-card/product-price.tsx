import { useFormatPrice } from '@/shared/lib/i18n/use-format-price';
type ProductPriceProps = {
  price: number | null;
};

export function ProductPrice({ price }: ProductPriceProps) {
  const formatPrice = useFormatPrice();
  if (price === null) {
    return <span className="text-sm leading-normal text-gray-500">Price unavailable</span>;
  }

  return (
    <span className="text-base leading-normal font-medium text-gray-900">{formatPrice(price)}</span>
  );
}
