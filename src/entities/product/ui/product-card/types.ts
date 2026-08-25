export type ProductCardProduct = {
  id: string;
  title: string;
  image: string;
  price: number | string;
  salePrice?: number | string | null;
  rating?: number | string | null;
};

export type ProductCardProps = {
  product: ProductCardProduct;
  className?: string;
  eagerImage?: boolean;
  onAddToCart?: (product: ProductCardProduct) => void;
  onQuickView?: (product: ProductCardProduct) => void;
  onAddToWishlist?: (product: ProductCardProduct) => void;
};

export type HotDealProduct = ProductCardProduct & {
  discountRate: number;
};
