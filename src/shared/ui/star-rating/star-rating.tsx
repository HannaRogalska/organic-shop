import Image from 'next/image';

type StarRatingProps = {
  value: number;
  size?: 12 | 20;
};

export function StarRating({ value, size = 12 }: StarRatingProps) {
  const normalizedValue = Math.min(5, Math.max(0, value));
  const roundedRating = Math.round(normalizedValue);

  return (
    <div className="flex items-center" aria-label={`${normalizedValue.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Image
          key={index}
          src={
            index < roundedRating
              ? '/images/shared/star-filled.svg'
              : '/images/shared/star-empty.svg'
          }
          alt=""
          width={size}
          height={size}
          className={size === 20 ? 'size-5' : 'size-3'}
        />
      ))}
    </div>
  );
}
