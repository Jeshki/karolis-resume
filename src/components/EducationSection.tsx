'use client';

import Link from 'next/link';
import { GraduationCap, Code, Laptop, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from 'src/contexts/LanguageContext';
import { Reveal } from 'src/components/Reveal';

export function EducationSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const hoverLift = reduceMotion ? undefined : { y: -3 };

  const education = [
    {
      n: '01',
      degree: 'Front-End Developer',
      school: 'Codecademy',
      year: t('2025 (vykdoma)', '2025 (in progress)'),
      icon: Laptop,
    },
    {
      n: '02',
      degree: t('Front-End programavimas', 'Front-End Programming'),
      school: t('Baltijos technologijų institutas', 'Baltic Institute of Technology'),
      year: '2021',
      icon: Code,
    },
    {
      n: '03',
      degree: t('Verslo vadyba ir analitika', 'Business Management and Analytics'),
      school: t('ISM Vadybos ir ekonomikos universitetas', 'ISM University of Management and Economics'),
      year: '2015',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full">
            <GraduationCap size={28} weight="light" />
            {t('Išsilavinimas', 'Education')}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {education.map((edu) => {
            const Icon = edu.icon;
            return (
              <motion.article
                key={edu.school}
                whileHover={hoverLift}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="h-full border border-black/10 hover:border-black/30 p-7 flex flex-col transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15">
                    <Icon size={24} weight="light" />
                  </span>
                  <span className="text-[11px] tracking-[0.2em] text-gray-400">{edu.n}</span>
                </div>
                <p className="text-sm tracking-[0.14em] uppercase text-gray-500 mb-3">{edu.year}</p>
                <h3 className="text-xl mb-2">{edu.degree}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">{edu.school}</p>
              </motion.article>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-gray-700 mb-4">
            {t('Turite projektą? Parašykite — atsakau per 24 val.', 'Have a project? Write — I reply within 24 hours.')}
          </p>
          <Link
            href="/kontaktai"
            className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            {t('Pakalbėkime', "Let's talk")}
            <ArrowRight size={18} weight="light" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
