'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function SignUpForm() {
  const t = useTranslations('Auth.signUp');

  return (
    <form className="mt-5" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="sign-up-email" className="sr-only">
        {t('email')}
      </label>

      <input
        id="sign-up-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder={t('email')}
        className="h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
      />
      <label htmlFor="sign-up-password" className="sr-only">
        {t('password')}
      </label>

      <input
        id="sign-up-password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        minLength={8}
        placeholder={t('password')}
        className="mt-3 h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
      />
      <label htmlFor="sign-up-confirm-password" className="sr-only">
        {t('confirmPassword')}
      </label>

      <input
        id="sign-up-confirm-password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
        minLength={8}
        placeholder={t('confirmPassword')}
        className="mt-3 h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
      />
      <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          name="acceptTerms"
          required
          className="size-5 rounded border-gray-200 accent-primary"
        />

        <span>{t('acceptTerms')}</span>
      </label>
      <button
        type="submit"
        className="mt-5 h-11 w-full cursor-pointer rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-hard-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {t('submit')}
      </button>
      <p className="mt-6 text-center text-sm text-gray-600">
        {t('haveAccount')}{' '}
        <Link
          href="/sign-in"
          className="font-medium text-gray-900 transition-colors hover:text-primary"
        >
          {t('login')}
        </Link>
      </p>
    </form>
  );
}
