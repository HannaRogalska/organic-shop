'use client';
import { useTranslations } from 'next-intl';
import { type SyntheticEvent, useState } from 'react';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('ContactPage.form');

  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();

    if (status === 'submitting') return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus('error');
      setMessage(t('unavailable'));
      return;
    }
    setStatus('submitting');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', accessKey);
    formData.append('from_name', 'Organic Shop contact form');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Contact form submission failed');
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
    <section
      aria-labelledby="contact-form-title"
      className="flex-1 rounded-lg bg-background p-6 shadow-[0_0_56px_rgba(0,38,3,0.08)] sm:p-10 lg:p-12"
    >
      <header className="text-center lg:text-left">
        <h1 id="contact-form-title" className="text-2xl leading-normal font-semibold text-gray-900">
          {t('title')}
        </h1>

        <p className="mt-2 max-w-122 text-sm leading-normal text-gray-500">{t('description')}</p>
      </header>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className="sr-only">{t('name')}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              required
              disabled={status === 'submitting'}
              placeholder={t('name')}
              className="h-12 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:border-primary focus-visible:outline-none"
            />
          </label>

          <label>
            <span className="sr-only">{t('email')}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              disabled={status === 'submitting'}
              placeholder={t('email')}
              className="h-12 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400
              disabled:cursor-not-allowed disabled:opacity-60 focus-visible:border-primary focus-visible:outline-none"
            />
          </label>
        </div>
        <label className="mt-4 block">
          <span className="sr-only">{t('subject')}</span>
          <input
            type="text"
            name="subject"
            disabled={status === 'submitting'}
            placeholder={t('subject')}
            className="h-12 w-full rounded-md border border-gray-100 px-4 text-base text-gray-900 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:border-primary focus-visible:outline-none"
          />
        </label>
        <label className="mt-4 block">
          <span className="sr-only">{t('message')}</span>
          <textarea
            name="message"
            required
            disabled={status === 'submitting'}
            placeholder={t('message')}
            rows={4}
            className="min-h-25 w-full resize-y rounded-md border border-gray-100 px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:border-primary focus-visible:outline-none"
          />
        </label>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-4 inline-flex h-13 cursor-pointer items-center justify-center rounded-full bg-primary px-10 text-sm font-semibold text-white transition-colors hover:bg-hard-primary disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {status === 'submitting' ? t('sending') : t('submit')}
        </button>
      </form>
      <p
        aria-live="polite"
        className={`mt-2 min-h-5 text-sm ${status === 'error' ? 'text-red-400' : 'text-primary'}`}
      >
        {message}
      </p>
    </section>
  );
}
