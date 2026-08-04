const FEATURED_CARD_COUNT = 4;
const PRODUCT_COLLECTION_COUNT = 3;
const COLLECTION_PRODUCT_COUNT = 3;

function FeaturedCardSkeleton() {
  return (
    <div className="h-82 overflow-hidden border border-gray-100 bg-background">
      <div className="h-60 bg-green-gray-50" />
      <div className="space-y-2 px-4 py-3">
        <div className="h-3 w-3/4 rounded-sm bg-green-gray-100" />
        <div className="h-4 w-1/3 rounded-sm bg-green-gray-100" />
        <div className="h-3 w-1/2 rounded-sm bg-green-gray-50" />
      </div>
    </div>
  );
}

function ProductListSkeleton() {
  return (
    <div className="flex h-28 overflow-hidden rounded-md border border-gray-100 bg-background">
      <div className="size-28 shrink-0 bg-green-gray-50" />
      <div className="flex flex-1 flex-col justify-center gap-2 px-3">
        <div className="h-3 w-3/4 rounded-sm bg-green-gray-100" />
        <div className="h-4 w-1/3 rounded-sm bg-green-gray-100" />
        <div className="h-3 w-1/2 rounded-sm bg-green-gray-50" />
      </div>
    </div>
  );
}

function ProductCollectionSkeleton() {
  return (
    <div>
      <div className="mb-4 h-9 w-32 rounded-sm bg-green-gray-100" />
      <div className="flex flex-col gap-4">
        {Array.from({ length: COLLECTION_PRODUCT_COUNT }).map((_, index) => (
          <ProductListSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export function LoadingFeaturedProducts() {
  return (
    <div className="mx-auto max-w-330 space-y-15 py-6">
      <section aria-label="Loading featured products">
        <div className="mx-auto mb-7 space-y-2">
          <div className="mx-auto h-4 w-24 rounded-sm bg-green-gray-50" />
          <div className="mx-auto h-10 w-80 max-w-full rounded-sm bg-green-gray-100" />
        </div>

        <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="h-82 bg-green-gray-100" />
          {Array.from({ length: FEATURED_CARD_COUNT }).map((_, index) => (
            <FeaturedCardSkeleton key={index} />
          ))}
        </div>
      </section>

      <section
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        aria-label="Loading product collections"
      >
        {Array.from({ length: PRODUCT_COLLECTION_COUNT }).map((_, index) => (
          <ProductCollectionSkeleton key={index} />
        ))}
        <div className="min-h-[423px] bg-green-gray-100" />
      </section>

      <section
        className="flex min-h-[396px] flex-col items-center justify-center gap-6 bg-green-gray-900"
        aria-label="Loading organic farm banner"
      >
        <div className="h-10 w-[495px] max-w-4/5 rounded-sm bg-green-gray-700" />
        <div className="size-20 rounded-full border border-green-gray-500" />
      </section>
    </div>
  );
}
