import { CATEGORY_CARD_COUNT, CategorySkeleton } from '@/widgets/loading/loading-skeleton';

export function LoadingCategories() {
  return (
    <section className="space-y-7 py-6" aria-label="Loading categories">
      <div className="mx-auto h-8 w-64 rounded-sm bg-green-gray-50" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: CATEGORY_CARD_COUNT }).map((_, index) => (
          <CategorySkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
