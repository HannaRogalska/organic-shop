'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import Image from 'next/image';

export function SignUpForm() {
  const t = useTranslations('Auth.signUp');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

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
      <div className="relative mt-3">
        <label htmlFor="sign-up-password" className="sr-only">
          {t('password')}
        </label>

        <input
          id="sign-up-password"
          name="password"
          type={isPasswordVisible ? 'text' : 'password'}
          autoComplete="new-password"
          required
          minLength={8}
          placeholder={t('password')}
          className="h-13 w-full rounded-md border border-gray-100 px-4 pr-12 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
        />
        <button
          type="button"
          aria-label={isPasswordVisible ? t('hidePassword') : t('showPassword')}
          aria-pressed={isPasswordVisible}
          onClick={() => setIsPasswordVisible((current) => !current)}
          className="absolute top-1/2 right-4 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-primary"
        >
          <Image
            src="/images/product/eye.svg"
            alt=""
            width={19}
            height={15}
            aria-hidden="true"
            className="h-[15px] w-[19px] max-w-none"
          />
        </button>
      </div>
      <div className="relative mt-3">
        <label htmlFor="sign-up-confirm-password" className="sr-only">
          {t('confirmPassword')}
        </label>

        <input
          id="sign-up-confirm-password"
          name="confirmPassword"
          type={isConfirmPasswordVisible ? 'text' : 'password'}
          autoComplete="new-password"
          required
          minLength={8}
          placeholder={t('confirmPassword')}
          className="h-13 w-full rounded-md border border-gray-100 px-4 pr-12 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
        />
        <button
          type="button"
          aria-label={
            isConfirmPasswordVisible ? t('hideConfirmPassword') : t('showConfirmPassword')
          }
          aria-pressed={isConfirmPasswordVisible}
          onClick={() => setIsConfirmPasswordVisible((current) => !current)}
          className="absolute top-1/2 right-4 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-primary"
        >
          <Image
            src="/images/product/eye.svg"
            alt=""
            width={19}
            height={15}
            aria-hidden="true"
            className="h-[15px] w-[19px] max-w-none"
          />
        </button>
      </div>

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
