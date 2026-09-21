import { ContactSection } from 'src/components/ContactSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Kontaktai',
  description:
    'Parašykite Karoliui Čibirui — atsakau per 24 val. Fiksuotos kainos web ir e-parduotuvių projektai. Kaunas / remote LT+EU. Tel. +370 603 02903.',
  path: '/kontaktai',
});

export default function KontaktaiPage() {
  return <ContactSection />;
}
