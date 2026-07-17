import { METRIC_CARD_COUNT, MetricSkeleton } from '@/widgets/loading/loading-skeleton';

export function LoadingStats() {
  return (
    <section
      className="grid grid-cols-1 gap-4 border-y border-gray-100 py-5 sm:grid-cols-4"
      aria-label="Loading stats"
    >
      {Array.from({ length: METRIC_CARD_COUNT }).map((_, index) => (
        <MetricSkeleton key={index} />
      ))}
    </section>
  );
}
