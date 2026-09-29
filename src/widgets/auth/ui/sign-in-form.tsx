'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function SignInForm() {
  const t = useTranslations('Auth.signIn');

  return (
    <form className="mt-5">
      <label htmlFor="sign-in-email" className="sr-only">
        {t('email')}
      </label>

      <input
        id="sign-in-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder={t('email')}
        className="h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
      />
      <label htmlFor="sign-in-password" className="sr-only">
        {t('password')}
      </label>

      <input
        id="sign-in-password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        minLength={8}
        placeholder={t('password')}
        className="mt-3 h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
      />
      <div className="mt-4 flex items-center justify-between gap-4">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="rememberMe"
            className="size-5 rounded border-gray-200 accent-primary"
          />
          <span>{t('rememberMe')}</span>
        </label>

        <button
          type="button"
          className="cursor-pointer text-sm text-gray-600 transition-colors hover:text-primary"
        >
          {t('forgotPassword')}
        </button>
      </div>
      <button
        type="submit"
        className="mt-5 h-11 w-full cursor-pointer rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-hard-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {t('submit')}
      </button>
      <p className="mt-6 text-center text-sm text-gray-600">
        {t('noAccount')}{' '}
        <Link
          href="/sign-up"
          className="font-medium text-gray-900 transition-colors hover:text-primary"
        >
          {t('register')}
        </Link>
      </p>
    </form>
  );
}
