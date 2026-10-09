'use client';

import Image from 'next/image';
import { useState, type SubmitEvent } from 'react';
import { useTranslations } from 'next-intl';

import { Link, useRouter } from '@/i18n/navigation';
import { authClient } from '@/shared/api/auth/client';

type SignInFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type SignInStatus = 'idle' | 'submitting' | 'error';

function getTextValue(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName);

  return typeof value === 'string' ? value : '';
}

function getSignInFormValues(form: HTMLFormElement): SignInFormValues {
  const formData = new FormData(form);

  return {
    email: getTextValue(formData, 'email').trim(),
    password: getTextValue(formData, 'password'),
    rememberMe: formData.get('rememberMe') === 'on',
  };
}

export function SignInForm() {
  const t = useTranslations('Auth.signIn');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const [status, setStatus] = useState<SignInStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSignIn(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const { email, password, rememberMe } = getSignInFormValues(event.currentTarget);

    setMessage('');
    setStatus('submitting');

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
        rememberMe,
      });

      if (error) {
        setStatus('error');
        setMessage(
          error.code === 'INVALID_EMAIL_OR_PASSWORD' ? t('invalidCredentials') : t('error')
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
    <form className="mt-5" onSubmit={handleSignIn}>
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

      <div className="relative mt-3">
        <label htmlFor="sign-in-password" className="sr-only">
          {t('password')}
        </label>

        <input
          id="sign-in-password"
          name="password"
          type={isPasswordVisible ? 'text' : 'password'}
          autoComplete="current-password"
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
