'use client';

import { useTranslations } from 'next-intl';
import { SyntheticEvent, useState } from 'react';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export function NewsletterForm() {
  const t = useTranslations('Footer.newsletter');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();

    if (status === 'submitting') return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus('error');
      setMessage(t('unavailable'));
      return;
    }

    setStatus('submitting');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', accessKey);
    formData.append('subject', 'New Organic Shop newsletter subscriber');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Subscription failed');
      }

      form.reset();
      setStatus('success');
      setMessage(t('success'));
    } catch {
      setStatus('error');
      setMessage(t('error'));
    }
  }

  return (
    <div className="w-full max-w-115 sm:w-115">
      <form
        onSubmit={handleSubmit}
        className="flex w-full overflow-hidden rounded-full bg-gray-800"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          {t('emailLabel')}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t('emailPlaceholder')}
          required
          disabled={status === 'submitting'}
          className="min-w-0 flex-1 bg-transparent px-6 py-3.5 text-base text-background outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
        />
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="m-1 shrink-0 rounded-full bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-hard-primary disabled:cursor-not-allowed disabled:opacity-60 sm:px-10 sm:text-base"
        >
          {status === 'submitting' ? t('subscribing') : t('subscribe')}
        </button>
      </form>
      <p
        aria-live="polite"
        className={`mt-2 min-h-5 text-sm ${status === 'error' ? 'text-red-400' : 'text-primary'}`}
      >
        {message}
      </p>
    </div>
  );
}
