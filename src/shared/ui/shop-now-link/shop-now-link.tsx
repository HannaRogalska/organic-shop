import { Link } from '@/i18n/navigation';

type ShopNowLinkProps = {
  tabIndex?: number;
  color?: 'primary' | 'light';
  size?: 'medium' | 'large';
  className?: string;
};

export function ShopNowLink({
  tabIndex,
  color = 'light',
  size = 'large',
  className = 'mt-8',
}: ShopNowLinkProps) {
  const variantClasses =
    color === 'primary'
      ? 'bg-primary text-white hover:bg-hard-primary'
      : 'bg-white text-primary hover:bg-gray-50';
  const sizeClasses =
    size === 'medium' ? 'gap-3 px-8 py-3.5 text-sm' : 'gap-4 px-10 py-4 text-base';

  return (
    <Link
      href="/shop"
      tabIndex={tabIndex}
      className={`inline-flex items-center justify-center rounded-full leading-[1.2] font-semibold transition-colors ${sizeClasses} ${variantClasses} ${className}`}
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
