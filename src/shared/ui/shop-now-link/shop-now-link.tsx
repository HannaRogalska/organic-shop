import Link from 'next/link';

type ShopNowLinkProps = {
  tabIndex?: number;
  color?: 'primary' | 'light';
};

export function ShopNowLink({ tabIndex, color = 'light' }: ShopNowLinkProps) {
  const variantClasses =
    color === 'primary'
      ? 'bg-primary text-white hover:bg-hard-primary'
      : 'bg-white text-primary hover:bg-gray-50';
  return (
    <Link
      href="/shop"
      tabIndex={tabIndex}
      className={`mt-8 inline-flex items-center justify-center gap-4 rounded-full px-10 py-4 text-base leading-[1.2] font-semibold transition-colors ${variantClasses}`}
    >
      Shop now
      <svg
        aria-hidden="true"
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        className="h-auto w-4"
      >
        <path
          d="M15.75 6.775H0.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.7 0.75L15.75 6.774L9.7 12.799"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
