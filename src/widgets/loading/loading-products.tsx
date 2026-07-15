import { PRODUCT_CARD_COUNT, ProductSkeleton } from '@/widgets/loading/loading-skeleton';

export function LoadingProducts() {
  return (
    <section className="space-y-7 py-6" aria-label="Loading products">
      <div className="mx-auto h-8 w-72 rounded-sm bg-green-gray-50" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div className="hidden min-h-84 bg-green-gray-100 lg:block" />
        {Array.from({ length: PRODUCT_CARD_COUNT }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
        <div className="hidden min-h-84 bg-green-gray-100 lg:block" />
      </div>
    </section>
  );
}
