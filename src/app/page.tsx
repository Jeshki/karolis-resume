import { HeroSection } from 'src/components/HeroSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Karolis Čibiras — Full-Stack programuotojas ir dizaineris | Kaunas',
  description:
    'Freelance web ir mobiliųjų aplikacijų kūrėjas Kaune: React, Next.js, Expo, Supabase, WordPress/WooCommerce ir Shopify. Svetainės, e-parduotuvės ir aplikacijos — peržiūrėkite darbus arba gaukite pasiūlymą.',
  path: '/',
  absolute: true,
});

export default function Home() {
  return <HeroSection />;
}
