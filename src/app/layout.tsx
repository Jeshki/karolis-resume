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
  title: 'Karolis Čibiras — Full-Stack programuotojas ir dizaineris | Kaunas',
  description:
    'Freelance web kūrėjas Kaune: React, Next.js, WordPress/WooCommerce ir Shopify. Svetainės ir e-parduotuvės fiksuota kaina — LT ir ES klientams.',
  path: '/',
  absolute: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...homeMeta,
  title: {
    default: 'Karolis Čibiras — Full-Stack programuotojas ir dizaineris | Kaunas',
    template: '%s | Karolis Čibiras',
  },
  robots: { index: true, follow: true },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    'Karolis Čibiras',
    'web programuotojas Kaunas',
    'Next.js',
    'React',
    'WordPress',
    'Shopify',
    'freelance',
    'e-parduotuvė',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phoneHref.replace('tel:', ''),
  jobTitle: 'Full-Stack programuotojas ir dizaineris',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kaunas',
    addressCountry: 'LT',
  },
  sameAs: [SITE.github, SITE.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lt" suppressHydrationWarning className={montserrat.variable}>
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
