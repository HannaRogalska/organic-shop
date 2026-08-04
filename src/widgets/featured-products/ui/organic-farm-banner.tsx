import Image from 'next/image';

export function OrganicFarmBanner() {
  return (
    <section
      className="relative mt-15 min-h-[396px] overflow-hidden"
      aria-labelledby="organic-farm-title"
    >
      <Image
        src="/images/product/organic-farm-background.jpg"
        alt="Fresh organic vegetables at the farm"
        fill
        sizes="(min-width: 1448px) 1320px, calc(100vw - 32px)"
        loading="eager"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-green-gray-900/70" />
      <div className="relative z-10 flex min-h-[396px] flex-col items-center justify-center px-5 text-center">
        <h3
          id="organic-farm-title"
          className="max-w-[495px] text-3xl leading-[1.2] font-semibold text-white sm:text-4xl"
        >
          We’re the Best Organic Farm in the World
        </h3>
        <button type="button" className="relative mt-6 size-20" aria-label="Play farm video">
          <Image src="/images/product/organic-farm-play.svg" alt="" fill sizes="80px" />
        </button>
      </div>
    </section>
  );
}
