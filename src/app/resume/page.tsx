import { EducationSection } from 'src/components/EducationSection';
import { ExperienceSection } from 'src/components/ExperienceSection';
import { ResumeHeader } from 'src/components/ResumeHeader';
import { SkillsSection } from 'src/components/SkillsSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'CV',
  description:
    'Karolio Čibiro CV: Full-Stack programuotojas ir dizaineris, 18+ metų e-komercijos ir web patirtis. React, Next.js, WordPress, Shopify. Atsisiųskite PDF.',
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
