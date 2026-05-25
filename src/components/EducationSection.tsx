'use client';

import { motion } from 'framer-motion';
import { IconSchool, IconCode, IconDeviceLaptop } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full"
        >
          <IconSchool size={26} className="text-primary" />
          {t('Išsilavinimas', 'Education')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mx-auto mb-4">
                {edu.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{edu.degree}</h3>
              <p className="text-primary">{edu.school}</p>
              <p className="text-sm text-gray-500 mt-2">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
