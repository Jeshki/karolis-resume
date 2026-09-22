import { EducationSection } from 'src/components/EducationSection';
import { ExperienceSection } from 'src/components/ExperienceSection';
import { ResumeHeader } from 'src/components/ResumeHeader';
import { SkillsSection } from 'src/components/SkillsSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'CV',
  description:
    'Karolio Čibiro CV: Full-Stack programuotojas ir dizaineris. React, Next.js, Expo, Supabase, Neon, WordPress, Shopify, e-komercija. Atsisiųskite PDF.',
  path: '/resume',
});

export default function ResumePage() {
  return (
    <>
      <ResumeHeader />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </>
  );
}
