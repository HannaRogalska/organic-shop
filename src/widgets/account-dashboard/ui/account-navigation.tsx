'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { authClient } from '@/shared/api/auth/client';

const navigationItems = [
  { key: 'dashboard', href: '/account' },
  { key: 'orderHistory', href: '/account/orders' },
  { key: 'wishlist', href: '/wishlist' },
  { key: 'shoppingCart', href: '/cart' },
  { key: 'settings', href: '/account/settings' },
] as const;

export function AccountNavigation() {
  const t = useTranslations('AccountPage.navigation');
  const pathname = usePathname();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState('');

  async function handleSignOut() {
    setSignOutError('');
    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        setSignOutError(t('logoutError'));
        return;
      }

      router.replace('/');
      router.refresh();
    } catch {
      setSignOutError(t('logoutError'));
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <nav
      aria-label={t('label')}
      className="w-full overflow-hidden rounded-lg border border-gray-100 bg-background lg:w-78 lg:shrink-0"
    >
      <h2 className="px-5 py-4 text-xl font-medium text-gray-900">{t('title')}</h2>

      <ul>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex h-14 items-center border-l-2 px-5 text-sm transition-colors ${
                  isActive
                    ? 'border-primary bg-green-gray-50 font-medium text-gray-900'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="flex h-14 w-full cursor-pointer items-center border-l-2 border-transparent px-5 text-left text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {t('logout')}
      </button>
      {signOutError ? (
        <p role="alert" className="px-5 pb-4 text-sm text-danger">
          {signOutError}
        </p>
      ) : null}
    </nav>
  );
}
