import type { ReactNode } from 'react';
import Image from 'next/image';
import { ShopNowLink } from '@/shared/ui/shop-now-link/shop-now-link';

type SaleBannerProps = {
  eyebrow: string;
  title: ReactNode;
  image: string;
  imageSizes: string;
  className: string;
  contentClassName?: string;
  imageClassName?: string;
  linkSize?: 'medium' | 'large';
  linkClassName?: string;
  eagerImage?: boolean;
};

export function SaleBanner({
  eyebrow,
  title,
  image,
  imageSizes,
  className,
  contentClassName = '',
  imageClassName = 'object-contain object-bottom',
  linkSize = 'large',
  linkClassName,
  eagerImage = false,
}: SaleBannerProps) {
  return (
    <article className={`relative overflow-hidden text-center ${className}`}>
      <Image
        src={image}
        alt=""
        fill
        sizes={imageSizes}
        loading={eagerImage ? 'eager' : 'lazy'}
        className={imageClassName}
      />

      <div className={`relative z-10 flex flex-col items-center ${contentClassName}`}>
        <p className="text-xs leading-normal font-medium tracking-wide text-gray-900 uppercase">
          {eyebrow}
        </p>
        {title}
        <ShopNowLink size={linkSize} className={linkClassName} />
      </div>
    </article>
  );
}
