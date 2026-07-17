export function LoadingFeaturedCards() {
  return (
    <section className="grid gap-4 md:grid-cols-3" aria-label="Loading featured cards">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="h-56 rounded-sm bg-green-gray-100 sm:h-72 lg:h-84" />
      ))}
    </section>
  );
}
