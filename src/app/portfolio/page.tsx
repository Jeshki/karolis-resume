import { PortfolioSection } from 'src/components/PortfolioSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Darbai',
  description:
    'Karolio Čibiro portfolio: Next.js ir WordPress svetainės, Shopify ir WooCommerce e-parduotuvės, UI ir video. Web projektai — pirmiausia.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return <PortfolioSection />;
}
