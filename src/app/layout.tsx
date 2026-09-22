import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Providers } from 'src/components/Providers';
import { createMetadata } from 'src/lib/metadata';
import { SITE } from 'src/lib/site';
import './globals.css';
import './print.css';

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300'],
  variable: '--font-sans',
  display: 'swap',
});

const homeMeta = createMetadata({
  title: 'Karolis Čibiras — Full-Stack Developer & Designer | Kaunas',
  description:
    'Freelance web and mobile app developer in Kaunas: React, Next.js, Expo, Supabase, WordPress/WooCommerce and Shopify. Websites, e-commerce stores and apps for clients in Lithuania and the EU.',
  path: '/',
  absolute: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...homeMeta,
  title: {
    default: 'Karolis Čibiras — Full-Stack Developer & Designer | Kaunas',
    template: '%s | Karolis Čibiras',
  },
  robots: { index: true, follow: true },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    'Karolis Čibiras',
    'web developer Kaunas',
    'Next.js',
    'React',
    'Expo',
    'React Native',
    'Supabase',
    'WordPress',
    'Shopify',
    'freelance',
    'e-commerce',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneHref.replace('tel:', ''),
  jobTitle: 'Full-Stack Developer & Designer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kaunas',
    addressCountry: 'LT',
  },
  sameAs: [SITE.github, SITE.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.variable}>
      <body className="font-sans font-light bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
