import Image from 'next/image';
import { ProductCardAction } from './product-card-action';

type ProductCardImageProps = {
  image: string;
  title: string;
  onAddToWishlist?: () => void;
  onQuickView?: () => void;
};

export function ProductCardImage({
  image,
  title,
  onAddToWishlist,
  onQuickView,
}: ProductCardImageProps) {
  return (
    <div className="relative h-62 shrink-0 overflow-hidden p-px">
      <Image
        src={image}
        alt={title}
        fill
        sizes="248px"
        unoptimized
        className="size-full object-contain transition-transform duration-300 group-hover/product:scale-[1.03]"
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
