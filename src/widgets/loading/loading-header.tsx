export function LoadingHeader() {
  return (
    <header className="space-y-4">
      <div className="h-8 rounded-sm bg-green-gray-50" />

      <div className="flex items-center gap-6">
        <div className="h-10 w-32 rounded-md bg-green-gray-100" />
        <div className="hidden h-10 flex-1 rounded-md bg-green-gray-50 sm:block" />
        <div className="h-10 w-32 rounded-md bg-green-gray-50" />
      </div>

      <div className="h-12 rounded-sm bg-green-gray-900" />
    </header>
  );
}
