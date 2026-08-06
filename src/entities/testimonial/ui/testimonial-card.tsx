import Image from 'next/image';
import { StarRating } from '@/shared/ui/star-rating/star-rating';
import type { Testimonial } from '../model/types';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { text, client, rating } = testimonial;

  return (
    <div className="flex h-full min-h-63.5 flex-col bg-background p-6 shadow-[0_10px_10px_rgba(0,0,0,0.01)]">
      <Image src="/images/testimonials/quote.svg" alt="" width={32} height={26} />
      <p className="mt-4 text-sm leading-6 text-gray-700">{text}</p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={client.avatar}
            alt={client.name}
            width={56}
            height={56}
            className="size-14 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="text-base leading-6 font-medium text-gray-900">{client.name}</p>
            <p className="text-sm leading-5 text-gray-400">{client.role}</p>
          </div>
        </div>
        <div className="shrink-0">
          <StarRating value={rating} size={20} />
        </div>
      </div>
    </div>
  );
}
