import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

const poppins = Poppins({
  variable: '--font-poppins-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export async function generateMetadata({ params }: Pick<Props, 'params'>): Promise<Metadata> {
  const locale = await getValidatedLocale(params);
  const t = await getTranslations({
    locale,
    namespace: 'Metadata',
  });

  const openGraphLocale = locale === 'pl' ? 'pl_PL' : 'en_US';

  const keywords =
    locale === 'pl'
      ? ['żywność ekologiczna', 'świeże produkty', 'dostawa zdrowej żywności']
      : ['organic food', 'fresh produce', 'healthy food delivery'];

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    applicationName: t('applicationName'),
    keywords,
    openGraph: {
      type: 'website',
      locale: openGraphLocale,
      siteName: t('applicationName'),
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

type Locale = (typeof routing.locales)[number];

async function getValidatedLocale(params: Props['params']): Promise<Locale> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return locale;
}

export default async function RootLayout({ children, params }: Props) {
  const locale = await getValidatedLocale(params);

  return (
    <html lang={locale} className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
