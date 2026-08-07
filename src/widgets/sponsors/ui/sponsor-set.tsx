import Image from 'next/image';
import { SPONSORS } from '../model/constants';

export const SponsorSet = () => (
  <ul className="flex h-8 shrink-0 items-center">
    {SPONSORS.map((sponsor) => (
      <li className="flex shrink-0 items-center" key={sponsor.id}>
        <div className="flex w-50 shrink-0 items-center justify-center sm:w-51 lg:w-55">
          <Image
            alt={sponsor.name}
            className="block object-contain"
            height={sponsor.height}
            src={sponsor.src}
            width={sponsor.width}
          />
        </div>
        <span aria-hidden="true" className="h-8 w-px shrink-0 bg-gray-100" />
      </li>
    ))}
  </ul>
);
