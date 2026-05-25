'use client';

import { EducationSection } from 'src/components/EducationSection';
import { ExperienceSection } from 'src/components/ExperienceSection';
import { ResumeHeader } from 'src/components/ResumeHeader';
import { SkillsSection } from 'src/components/SkillsSection';

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
