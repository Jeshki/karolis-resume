import { HeroSection } from 'src/components/HeroSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Karolis Čibiras — Full-Stack programuotojas ir dizaineris | Kaunas',
  description:
    'Freelance web kūrėjas Kaune: React, Next.js, WordPress/WooCommerce ir Shopify. Svetainės ir e-parduotuvės fiksuota kaina — peržiūrėkite darbus arba gaukite pasiūlymą.',
  path: '/',
  absolute: true,
});

export default function Home() {
  return <HeroSection />;
}
