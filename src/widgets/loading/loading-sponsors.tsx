import { SPONSORS } from '@/widgets/sponsors/model/constants';

export const LoadingSponsors = () => (
  <section
    aria-label="Loading sponsors"
    className="mx-auto flex h-38 w-full max-w-330 items-center overflow-hidden py-15"
  >
    <div className="flex h-8 w-max items-center">
      {SPONSORS.map((sponsor) => (
        <div className="flex shrink-0 items-center" key={sponsor.name}>
          <div className="flex w-50 justify-center sm:w-51 lg:w-55">
            <div className="h-8 rounded-sm bg-green-gray-50" style={{ width: sponsor.width }} />
          </div>
          <span className="h-8 w-px bg-gray-100" />
        </div>
      ))}
    </div>
  </section>
);
