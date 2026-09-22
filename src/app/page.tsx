import { HeroSection } from 'src/components/HeroSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Karolis Čibiras — Full-Stack Developer & Designer | Kaunas',
  description:
    'Freelance web and mobile app developer in Kaunas: React, Next.js, Expo, Supabase, WordPress/WooCommerce and Shopify. Websites, e-commerce stores and apps — view the work or get a quote.',
  path: '/',
  absolute: true,
});

export default function Home() {
  return <HeroSection />;
}
