import { LoadingHeader } from '@/widgets/loading/loading-header';
import { LoadingPreview } from '@/widgets/loading/loading-preview';
import { LoadingStats } from '@/widgets/loading/loading-stats';
import { LoadingFeaturedProducts } from '@/widgets/loading/loading-featured';
import { LoadingMembers } from '@/widgets/loading/loading-members';

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading shop" className="min-h-screen">
      <div className="mx-auto w-full max-w-350 bg-background px-4 py-6 sm:px-6 lg:px-10">
        <div className="animate-pulse space-y-6">
          <LoadingHeader />
          <LoadingPreview />
          <LoadingStats />
          <LoadingFeaturedProducts />
          <LoadingMembers />
        </div>
      </div>
    </div>
  );
}
