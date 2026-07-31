export type ProductCardProduct = {
  id: string;
  title: string;
  image: string;
  price: number | string;
  rating?: number | string | null;
};

export type ProductCardProps = {
  product: ProductCardProduct;
  currency?: string;
  locale?: string;
  className?: string;
  eagerImage?: boolean;
  onAddToCart?: (product: ProductCardProduct) => void;
  onQuickView?: (product: ProductCardProduct) => void;
  onAddToWishlist?: (product: ProductCardProduct) => void;
};
