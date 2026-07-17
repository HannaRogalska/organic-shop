import { SIDEBAR_ITEM_COUNT, SidebarItemSkeleton } from '@/widgets/loading/loading-skeleton';

export function LoadingPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-[312px_minmax(0,1fr)]">
      <div className="hidden overflow-hidden border border-gray-100 lg:block">
        {Array.from({ length: SIDEBAR_ITEM_COUNT }).map((_, index) => (
          <SidebarItemSkeleton key={index} />
        ))}
      </div>

      <div className="h-70 rounded-sm bg-green-gray-900 sm:h-105 lg:h-140" />
    </div>
  );
}
