import { PortfolioSection } from 'src/components/PortfolioSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Work',
  description:
    'Karolis Čibiras portfolio: Next.js and WordPress websites, Shopify and WooCommerce stores, UI and video. Web projects first.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return <PortfolioSection />;
}
