import { PrivacyContent } from 'src/components/PrivacyContent';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Privatumo politika',
  description:
    'Kaip Karolis Čibiras tvarko kontaktinės formos asmens duomenis: tikslas, saugojimas, teisės pagal BDAR.',
  path: '/privatumas',
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
