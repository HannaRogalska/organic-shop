export function LoadingFeaturedCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="h-56 rounded-sm bg-green-gray-100 sm:h-72 lg:h-84" />
      ))}
    </div>
  );
}
