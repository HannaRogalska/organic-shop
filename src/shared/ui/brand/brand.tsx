import Image from 'next/image';
import Link from 'next/link';

export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Shopery home">
      <Image src="/images/header/logo-mark.svg" alt="Shopery logo" width={32} height={32} />
      <span className="text-3xl leading-none font-medium tracking-[-0.06rem] text-green-gray-900 sm:text-4xl">
        Shopery
      </span>
    </Link>
  );
}
