import Image from 'next/image';

type ProductRatingProps = {
  value: number;
};

export function ProductRating({ value }: ProductRatingProps) {
  const roundedRating = Math.round(Math.min(5, Math.max(0, value)));

  return (
    <div className="flex items-center" aria-label={`${value.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          src={
            index < roundedRating
              ? '/images/product/star-filled.svg'
              : '/images/product/star-empty.svg'
          }
          alt=""
          width={12}
          height={12}
          className="size-3"
        />
      ))}
    </div>
  );
}
