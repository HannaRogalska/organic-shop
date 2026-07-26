'use client';

import { AddToCartButton } from '@/shared/ui/add-to-cart-button/add-to-cart-button';
import { ProductCardImage } from './product-card/product-card-image';
import { ProductCardInfo } from './product-card/product-card-info';
import type { ProductCardProps } from './product-card/types';

export type { ProductCardProduct } from './product-card/types';

function toAmount(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === '') return null;

  const amount = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(amount) ? amount : null;
}

export function ProductCard({
  product,
  currency = 'USD',
  locale = 'en-US',
  onAddToCart,
  onQuickView,
  onAddToWishlist,
}: ProductCardProps) {
  const price = toAmount(product.price);
  const rating = toAmount(product.rating) ?? 0;

  return (
    <div
      className={
        'group/product relative flex h-85 w-full min-w-0 flex-col overflow-hidden border border-gray-100 bg-background transition-[border-color,border-radius,box-shadow] duration-200 hover:z-10 hover:rounded-lg hover:border-hard-primary hover:shadow focus-within:z-10 focus-within:rounded-lg focus-within:border-hard-primary focus-within:shadow max-w-62'
      }
    >
      <ProductCardImage
        image={product.image}
        title={product.title}
        onAddToWishlist={() => onAddToWishlist?.(product)}
        onQuickView={() => onQuickView?.(product)}
      />

      <div className="flex min-h-0 flex-1 items-center justify-between gap-3 px-4 pt-3 pb-4">
        <ProductCardInfo
          title={product.title}
          price={price}
          rating={rating}
          currency={currency}
          locale={locale}
        />

        <AddToCartButton
          label={`Add ${product.title} to cart`}
          onClick={() => onAddToCart?.(product)}
        />
      </div>
    </div>
  );
}
