import { notFound } from 'next/navigation';
import { CaseStudyView } from 'src/components/CaseStudyView';
import { createMetadata } from 'src/lib/metadata';
import { caseStudyProjects, getProjectBySlug } from 'src/lib/projects';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) {
    return createMetadata({
      title: 'Projektas nerastas',
      description: 'Šio case study nėra.',
      path: `/portfolio/${slug}`,
    });
  }

  return createMetadata({
    title: project.title.lt,
    description: project.caseStudy.summary.lt,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) notFound();
  return <CaseStudyView slug={slug} />;
}
