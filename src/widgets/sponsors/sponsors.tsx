import { SponsorSet } from './ui/sponsor-set';

const SPONSOR_SET_COUNT = 2;

export const Sponsors = () => (
  <section
    aria-label="Our sponsors"
    className="mx-auto h-38 w-full max-w-330 overflow-hidden bg-background"
  >
    <div className="sponsors-marquee__track flex w-max items-center py-15">
      {Array.from({ length: SPONSOR_SET_COUNT }, (_, index) => (
        <div aria-hidden={index > 0 || undefined} key={index}>
          <SponsorSet />
        </div>
      ))}
    </div>
  </section>
);
