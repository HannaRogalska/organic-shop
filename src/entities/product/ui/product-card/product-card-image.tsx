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
        sizes="248px"
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
