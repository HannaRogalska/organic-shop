const TESTIMONIAL_CARD_COUNT = 3;

function TestimonialCardSkeleton() {
  return (
    <div className="min-h-63.5 bg-background p-6">
      <div className="h-6.5 w-8 rounded-sm bg-green-gray-100" />
      <div className="mt-4 space-y-2">
        <div className="h-3.5 w-full rounded-sm bg-gray-100" />
        <div className="h-3.5 w-full rounded-sm bg-gray-100" />
        <div className="h-3.5 w-11/12 rounded-sm bg-gray-100" />
        <div className="h-3.5 w-8/12 rounded-sm bg-gray-100" />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-14 rounded-full bg-green-gray-100" />
          <div className="space-y-2">
            <div className="h-4 w-24 rounded-sm bg-gray-100" />
            <div className="h-3 w-16 rounded-sm bg-gray-50" />
          </div>
        </div>
        <div className="h-5 w-26 rounded-sm bg-gray-100" />
      </div>
    </div>
  );
}

export function LoadingTestimonials() {
  return (
    <section className="bg-gray-50 px-4 py-15 sm:px-8" aria-label="Loading testimonials">
      <div className="mx-auto max-w-330">
        <div className="mx-auto mb-9 space-y-2">
          <div className="mx-auto h-3.5 w-32 rounded-sm bg-green-gray-100" />
          <div className="mx-auto h-11 w-[440px] max-w-full rounded-sm bg-gray-100" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: TESTIMONIAL_CARD_COUNT }).map((_, index) => (
            <TestimonialCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
