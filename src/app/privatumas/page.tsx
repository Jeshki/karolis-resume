import { PrivacyContent } from 'src/components/PrivacyContent';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy policy',
  description:
    'How Karolis Čibiras handles contact-form personal data: purpose, retention, and rights under the GDPR.',
  path: '/privatumas',
});

export default function PrivacyPage() {
  return <PrivacyContent />;
}
