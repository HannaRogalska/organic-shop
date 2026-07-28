export type HeroSlideTitle = readonly [firstLine: string, secondLine: string];

export type HeroSlide = {
  image: string;
  eyebrow: string;
  discount: `${number}%`;
  title: HeroSlideTitle;
};
