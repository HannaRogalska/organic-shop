import { FeatureBadges } from './ui/feature-badges';
import { HeroBanner } from './ui/hero-banner';

export function HomeHero() {
  return (
    <div className="mx-auto w-full max-w-330 px-4 sm:px-6 xl:px-0">
      <div className="home-hero-stage grid grid-cols-[0_minmax(0,1fr)] pt-6">
        <div aria-hidden="true" />
        <HeroBanner />
      </div>
      <FeatureBadges />
    </div>
  );
}
