import { ContactSection } from 'src/components/ContactSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Write to Karolis Čibiras — I reply within 24 hours. Fixed-price web and e-commerce projects. Kaunas / remote, Lithuania and the EU. Tel. +370 603 02903.',
  path: '/kontaktai',
});

export default function KontaktaiPage() {
  return <ContactSection />;
}
