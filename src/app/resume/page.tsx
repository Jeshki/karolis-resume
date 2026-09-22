import { EducationSection } from 'src/components/EducationSection';
import { ExperienceSection } from 'src/components/ExperienceSection';
import { ResumeHeader } from 'src/components/ResumeHeader';
import { SkillsSection } from 'src/components/SkillsSection';
import { createMetadata } from 'src/lib/metadata';

export const metadata = createMetadata({
  title: 'Resume',
  description:
    'Karolis Čibiras resume: Full-Stack Developer & Designer. React, Next.js, Expo, Supabase, Neon, WordPress, Shopify, e-commerce. Download the PDF.',
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
