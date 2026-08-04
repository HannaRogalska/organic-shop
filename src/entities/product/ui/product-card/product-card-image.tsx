import Image from 'next/image';
import { ProductCardAction } from './product-card-action';

type ProductCardImageProps = {
  image: string;
  title: string;
  eager?: boolean;
  onAddToWishlist?: () => void;
  onQuickView?: () => void;
};

export function ProductCardImage({
  image,
  title,
  eager = false,
  onAddToWishlist,
  onQuickView,
}: ProductCardImageProps) {
  return (
    <div className="relative h-60 shrink-0 overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1448px) 254px, (min-width: 1280px) calc((100vw - 176px) / 5), (min-width: 1024px) calc((100vw - 164px) / 4), (min-width: 768px) calc((100vw - 88px) / 3), (min-width: 640px) calc((100vw - 76px) / 2), (min-width: 520px) calc((100vw - 44px) / 2), calc(100vw - 32px)"
        loading={eager ? 'eager' : 'lazy'}
        className="object-contain transition-transform duration-300 group-hover/product:scale-[1.03]"
      />

      <div className="absolute top-4 right-4 flex translate-x-2 flex-col gap-3 opacity-0 duration-200 group-hover/product:translate-x-0 group-hover/product:opacity-100 group-focus-within/product:translate-x-0 group-focus-within/product:opacity-100">
        <ProductCardAction
          icon="/images/product/heart.svg"
          label={`Add ${title} to wishlist`}
          onClick={onAddToWishlist}
        />
        <ProductCardAction
          icon="/images/product/eye.svg"
          label={`Quick view ${title}`}
          onClick={onQuickView}
        />
      </div>
    </div>
  );
}
