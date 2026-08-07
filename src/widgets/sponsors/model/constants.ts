export type Sponsor = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

export const SPONSORS: Sponsor[] = [
  { id: 'steps', name: 'Steps', src: '/images/sponsors/steps.svg', width: 82, height: 32 },
  { id: 'mango', name: 'Mango', src: '/images/sponsors/mango.svg', width: 67, height: 32 },
  {
    id: 'food-network',
    name: 'Food Network',
    src: '/images/sponsors/food-network.svg',
    width: 60,
    height: 32,
  },
  { id: 'food', name: 'Food', src: '/images/sponsors/food.svg', width: 83, height: 32 },
  { id: 'bookoff', name: 'BookOff', src: '/images/sponsors/bookoff.svg', width: 131, height: 32 },
  {
    id: 'g-series',
    name: 'G Series',
    src: '/images/sponsors/g-series.svg',
    width: 96,
    height: 32,
  },
];
