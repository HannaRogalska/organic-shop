import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type BrandProps = {
  color?: 'default' | 'inverse';
};

export function Brand({ color = 'default' }: BrandProps) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Shopery home">
      <Image src="/images/header/logo-mark.svg" alt="Shopery logo" width={32} height={32} />
      <span
        className={`text-3xl leading-none font-medium tracking-[-0.06rem] sm:text-4xl ${
          color === 'inverse' ? 'text-background' : 'text-green-gray-900'
        }`}
      >
        Shopery
      </span>
    </Link>
  );
}
