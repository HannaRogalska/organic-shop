import { useTranslations } from 'next-intl';

type AccountProfileCardProps = {
  name: string;
  email: string;
};

function getInitials(name: string): string {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return initials || '?';
}

export function AccountProfileCard({ name, email }: AccountProfileCardProps) {
  const t = useTranslations('AccountPage.profile');

  return (
    <article
      aria-label={t('label')}
      className="flex min-h-60 flex-col items-center justify-center rounded-lg border border-gray-100 bg-background p-6 text-center"
    >
      <div className="grid size-30 place-items-center rounded-full bg-green-gray-50 text-3xl font-semibold text-primary">
        {getInitials(name)}
      </div>

      <h2 className="mt-4 text-xl font-medium text-gray-900">{name}</h2>
      <p className="mt-1 text-sm text-gray-500">{t('customer')}</p>
      <p className="mt-2 text-sm text-gray-600">{email}</p>
    </article>
  );
}
