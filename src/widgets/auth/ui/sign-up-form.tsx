'use client';

import Image from 'next/image';
import { useState, type SubmitEvent } from 'react';
import { useTranslations } from 'next-intl';

import { Link, useRouter } from '@/i18n/navigation';
import { authClient } from '@/shared/api/auth/client';

type SignUpStatus = 'idle' | 'submitting' | 'error';

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function getTextValue(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  return typeof value === 'string' ? value : '';
}

function getSignUpFormValues(form: HTMLFormElement): SignUpFormValues {
  const formData = new FormData(form);

  return {
    name: getTextValue(formData, 'name').trim(),
    email: getTextValue(formData, 'email').trim(),
    password: getTextValue(formData, 'password'),
    confirmPassword: getTextValue(formData, 'confirmPassword'),
  };
}

export function SignUpForm() {
  const t = useTranslations('Auth.signUp');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const router = useRouter();
  const [status, setStatus] = useState<SignUpStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSignUp(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const { name, email, password, confirmPassword } = getSignUpFormValues(event.currentTarget);

    setMessage('');

    if (password !== confirmPassword) {
      setStatus('error');
      setMessage(t('passwordMismatch'));
      return;
    }

    setStatus('submitting');

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        setStatus('error');
        setMessage(
          error.code === 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL' ? t('accountExists') : t('error')
        );
        return;
      }

      router.replace('/');
      router.refresh();
    } catch {
      setStatus('error');
      setMessage(t('error'));
    }
  }

  return (
    <form className="mt-5" onSubmit={handleSignUp}>
      <label htmlFor="sign-up-name" className="sr-only">
        {t('name')}
      </label>

      <input
        id="sign-up-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        placeholder={t('name')}
        className="h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
      />
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
        className="mt-3 h-13 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 focus-visible:border-primary focus-visible:outline-none"
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
      <p role="alert" aria-live="polite" className="mt-3 min-h-5 text-sm text-danger">
        {message}
      </p>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 h-11 w-full cursor-pointer rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-hard-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? t('submitting') : t('submit')}
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
