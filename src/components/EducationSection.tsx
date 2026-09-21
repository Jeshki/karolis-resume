'use client';

import Link from 'next/link';
import { IconSchool, IconCode, IconDeviceLaptop, IconArrowRight } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { Reveal } from 'src/components/Reveal';

export function EducationSection() {
  const { t } = useLanguage();

  const education = [
    {
      degree: 'Front-End Developer',
      school: 'Codecademy',
      year: t('2025 (vykdoma)', '2025 (in progress)'),
      icon: <IconDeviceLaptop size={24} />,
    },
    {
      degree: t('Front-End programavimas', 'Front-End Programming'),
      school: t('Baltijos technologijų institutas', 'Baltic Institute of Technology'),
      year: '2021',
      icon: <IconCode size={24} />,
    },
    {
      degree: t('Verslo vadyba ir analitika', 'Business Management and Analytics'),
      school: t('ISM Vadybos ir ekonomikos universitetas', 'ISM University of Management and Economics'),
      year: '2015',
      icon: <IconSchool size={24} />,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full">
            <IconSchool size={26} className="text-primary" />
            {t('Išsilavinimas', 'Education')}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.05} className="h-full">
              <article className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow h-full">
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mx-auto mb-4">{edu.icon}</div>
                <h3 className="font-bold text-lg mb-2">{edu.degree}</h3>
                <p className="text-primary">{edu.school}</p>
                <p className="text-sm text-gray-500 mt-2">{edu.year}</p>
              </article>
            </Reveal>
          ))}
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
            <IconArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
