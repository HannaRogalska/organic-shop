import { ProductPrice } from './product-price';
import { ProductRating } from './product-rating';

type ProductCardInfoProps = {
  title: string;
  price: number;
  rating: number;
  currency: string;
  locale: string;
};

export function ProductCardInfo({ title, price, rating, currency, locale }: ProductCardInfoProps) {
  return (
    <div className="min-w-0">
      <h3 className="truncate text-sm leading-normal font-normal text-gray-700 transition-colors group-hover/product:text-hard-primary">
        {title}
      </h3>
      <ProductPrice price={price} currency={currency} locale={locale} />
      <ProductRating value={rating} />
    </div>
  );
}
