import Image from 'next/image';
import type { ProductCardProduct } from '@/entities/product/ui/product-card';
import { StarRating } from '@/shared/ui/star-rating/star-rating';

function toAmount(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === '') return 0;
  const amount = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(amount) ? amount : 0;
}

function formatPrice(value: number | string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(toAmount(value));
}

export function ProductListCard({ product }: { product: ProductCardProduct }) {
  const originalPrice = toAmount(product.price);
  const salePrice = toAmount(product.salePrice);
  const isOnSale = product.salePrice != null && salePrice < originalPrice;

  return (
    <article className="group/list-product flex min-h-28 overflow-hidden rounded-md border border-gray-100 bg-background transition-[border-color,box-shadow] hover:border-hard-primary hover:shadow">
      <div className="shrink-0 p-[5px]">
        <div className="relative size-[102px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="102px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 px-3 py-4">
        <div className="min-w-0">
          <h4 className="truncate text-sm leading-normal font-normal text-gray-700 transition-colors group-hover/list-product:text-hard-primary">
            {product.title}
          </h4>
          <p className="flex items-baseline gap-1.5 text-base leading-normal font-medium text-gray-900">
            <span>{formatPrice(isOnSale ? salePrice : originalPrice)}</span>
            {isOnSale && (
              <del className="text-sm font-normal text-gray-400">{formatPrice(originalPrice)}</del>
            )}
          </p>
        </div>
        <StarRating value={toAmount(product.rating)} />
      </div>
    </article>
  );
}
