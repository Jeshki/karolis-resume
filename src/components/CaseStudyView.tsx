'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IconArrowLeft, IconExternalLink } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { getProjectBySlug } from 'src/lib/projects';
import { Reveal } from 'src/components/Reveal';

export function CaseStudyView({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) return null;

  const { caseStudy } = project;
  const blocks = [
    { title: t('Problema', 'Problem'), body: t(caseStudy.problem.lt, caseStudy.problem.en) },
    { title: t('Sprendimas', 'Solution'), body: t(caseStudy.solution.lt, caseStudy.solution.en) },
    { title: t('Rezultatas', 'Result'), body: t(caseStudy.result.lt, caseStudy.result.en) },
  ];

  return (
    <article className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm mb-8 hover:underline underline-offset-4">
          <IconArrowLeft size={16} />
          {t('Atgal į darbus', 'Back to work')}
        </Link>

        <Reveal>
          <p className="text-sm font-medium text-gray-500 mb-2">{t('Case study', 'Case study')}</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(project.title.lt, project.title.en)}</h1>
          <p className="text-lg text-gray-700 mb-6">{t(caseStudy.summary.lt, caseStudy.summary.en)}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white py-2 px-5 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-10"
            >
              <IconExternalLink size={16} />
              {project.liveLabel
                ? t(project.liveLabel.lt, project.liveLabel.en)
                : t('Atidaryti svetainę', 'Open live site')}
            </a>
          ) : null}
        </Reveal>

        <Reveal
          className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg mb-12 ${
            project.imageFit === 'contain' ? 'bg-[#111]' : 'bg-gray-100'
          }`}
        >
          <Image
            src={project.image}
            alt={t(project.title.lt, project.title.en)}
            fill
            className={project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudy.metrics.map((metric) => (
            <div key={t(metric.label.lt, metric.label.en)} className="rounded-2xl border border-gray-200 p-5">
              <p className="text-2xl font-bold">{t(metric.value.lt, metric.value.en)}</p>
              <p className="text-sm text-gray-600 mt-1">{t(metric.label.lt, metric.label.en)}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-14">
          {blocks.map((block) => (
            <Reveal key={block.title}>
              <h2 className="text-2xl font-bold mb-3">{block.title}</h2>
              <p className="text-gray-700 leading-relaxed">{block.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
          <p className="font-semibold mb-2">{t('Reikia panašaus rezultato?', 'Need a similar result?')}</p>
          <p className="text-gray-600 mb-4">
            {t('Fiksuota kaina, briefing’as, paleidimas. Atsakau per 24 val.', 'Fixed price, briefing, launch. I reply within 24 hours.')}
          </p>
          <Link
            href="/kontaktai"
            className="inline-flex items-center justify-center bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {t('Gauti pasiūlymą', 'Get a quote')}
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
