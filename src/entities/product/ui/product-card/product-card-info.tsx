import { ProductPrice } from './product-price';
import { StarRating } from '@/shared/ui/star-rating/star-rating';

type ProductCardInfoProps = {
  title: string;
  price: number | null;
  rating: number;
};

export function ProductCardInfo({ title, price, rating }: ProductCardInfoProps) {
  return (
    <div className="min-w-0">
      <h3 className="truncate text-sm leading-normal font-normal text-gray-700 transition-colors group-hover/product:text-hard-primary">
        {title}
      </h3>
      <ProductPrice price={price} />
      <StarRating value={rating} />
    </div>
  );
}
