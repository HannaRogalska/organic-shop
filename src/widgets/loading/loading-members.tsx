const MEMBER_CARD_COUNT = 4;

function TeamMemberCardSkeleton() {
  return (
    <div className="overflow-hidden border border-gray-100 bg-background">
      <div className="h-70 bg-green-gray-50" />
      <div className="space-y-2 px-5 py-3.5">
        <div className="h-5 w-32 rounded-sm bg-green-gray-100" />
        <div className="h-4 w-40 rounded-sm bg-green-gray-50" />
      </div>
    </div>
  );
}

export function LoadingMembers() {
  return (
    <section className="mx-auto max-w-330 py-15" aria-label="Loading professional members">
      <div className="mx-auto mb-9 space-y-2">
        <div className="mx-auto h-3 w-10 rounded-sm bg-green-gray-50" />
        <div className="mx-auto h-11 w-[440px] max-w-full rounded-sm bg-green-gray-100" />
      </div>
      <div className="grid grid-cols-1 gap-6 min-[520px]:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: MEMBER_CARD_COUNT }).map((_, index) => (
          <TeamMemberCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
