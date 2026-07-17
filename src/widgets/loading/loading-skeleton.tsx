export const METRIC_CARD_COUNT = 4;
export const SIDEBAR_ITEM_COUNT = 10;
export const CATEGORY_CARD_COUNT = 12;
export const PRODUCT_CARD_COUNT = 8;

export const MetricSkeleton = () => (
  <div className="flex items-center gap-4">
    <div className="h-14 w-14 shrink-0 rounded-full bg-green-gray-100" />
    <div className="space-y-2">
      <div className="h-4 w-32 rounded-sm bg-green-gray-50" />
      <div className="h-3 w-40 rounded-sm bg-green-gray-50" />
    </div>
  </div>
);

export const SidebarItemSkeleton = () => (
  <div className="flex h-14 items-center gap-3 border-b border-gray-100 px-5 last:border-b-0">
    <div className="h-5 w-5 rounded-full bg-green-gray-50" />
    <div className="h-3 w-28 rounded-sm bg-green-gray-50" />
  </div>
);

export const CategorySkeleton = () => (
  <div className="flex h-53 flex-col items-center justify-center gap-5 border border-gray-100 p-5">
    <div className="h-24 w-24 rounded-full bg-green-gray-50" />
    <div className="h-3 w-20 rounded-sm bg-green-gray-50" />
  </div>
);

export const ProductSkeleton = () => (
  <div className="border border-gray-100 p-4">
    <div className="aspect-square bg-green-gray-50" />
    <div className="mt-4 space-y-2">
      <div className="h-4 w-3/4 rounded-sm bg-green-gray-50" />
      <div className="h-4 w-1/3 rounded-sm bg-green-gray-50" />
      <div className="h-3 w-1/2 rounded-sm bg-green-gray-50" />
    </div>
  </div>
);
