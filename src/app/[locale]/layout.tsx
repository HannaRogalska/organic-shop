import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const poppins = Poppins({
  variable: '--font-poppins-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Organic Food | Fresh & Healthy',
    template: '%s | Organic Food',
  },
  description: 'Fresh organic food delivery straight to your doorstep.',
  applicationName: 'Organic Food',
  keywords: ['organic food', 'fresh produce', 'healthy food delivery'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Organic Food',
    title: 'Organic Food | Fresh & Healthy',
    description: 'Fresh organic food delivery straight to your doorstep.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Food | Fresh & Healthy',
    description: 'Fresh organic food delivery straight to your doorstep.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
