export type HeroSlideTitle = readonly [firstLine: 'titleLine1', secondLine: 'titleLine2'];

export type HeroSlide = {
  image: string;
  eyebrow: 'saleUpTo' | 'specialOffer';
  discount: `${number}%`;
  title: HeroSlideTitle;
};
