'use client';

import Link from 'next/link';
import { ArrowRight, Code, GraduationCap, Laptop } from '@phosphor-icons/react/dist/ssr';
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
      year: '2025',
      status: t('Vykdoma', 'In progress'),
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
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl text-center mb-14 inline-flex items-center gap-2 justify-center w-full">
            <GraduationCap size={28} weight="light" />
            {t('Išsilavinimas', 'Education')}
          </h2>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute top-6 left-[16.6%] right-[16.6%] h-px bg-black/15"
          />

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {education.map((edu) => {
              const Icon = edu.icon;
              return (
                <motion.article
                  key={edu.school}
                  whileHover={hoverLift}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-full bg-white border border-black/10 hover:border-black/30 p-7 flex flex-col transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 mb-8">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white">
                      <Icon size={24} weight="light" />
                    </span>
                    <span className="text-[11px] tracking-[0.2em] text-gray-400">{edu.n}</span>
                  </div>
                  <p className="text-sm tracking-[0.14em] uppercase text-gray-500 mb-1">{edu.year}</p>
                  {edu.status ? (
                    <p className="text-[11px] tracking-[0.16em] uppercase text-gray-400 mb-3">
                      {edu.status}
                    </p>
                  ) : (
                    <div className="mb-3 h-[17px]" />
                  )}
                  <h3 className="text-xl mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{edu.school}</p>
                </motion.article>
              );
            })}
          </div>
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
