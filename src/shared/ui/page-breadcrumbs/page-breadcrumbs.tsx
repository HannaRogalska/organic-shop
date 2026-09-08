import { Link } from '@/i18n/navigation';
import Image from 'next/image';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbsProps = {
  ariaLabel: string;
  items: readonly BreadcrumbItem[];
};

export function PageBreadcrumbs({ ariaLabel, items }: PageBreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel} className="relative h-30 overflow-hidden bg-green-gray-900">
      <Image
        src="/images/breadcrumbs/background.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-green-gray-900/70" aria-hidden="true" />

      <ol className="relative  mx-auto flex h-full max-w-330 items-center gap-3 px-4 sm:px-8 lg:px-16 2xl:px-0">
        {items.map((item, index) => (
          <li key={`${item.href ?? 'current'}-${item.label}`} className="flex items-center gap-3">
            {index > 0 && (
              <Image
                src="/images/breadcrumbs/chevron.svg"
                alt=""
                width={9}
                height={5}
                className="-rotate-90"
              />
            )}

            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center text-base text-gray-400 transition-colors hover:text-background"
              >
                {index === 0 ? (
                  <>
                    <Image src="/images/breadcrumbs/home.svg" alt="" width={18} height={19} />
                    <span className="sr-only">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </Link>
            ) : (
              <span aria-current="page" className="text-base text-primary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
