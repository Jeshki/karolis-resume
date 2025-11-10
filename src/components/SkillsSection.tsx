'use client';

import { motion } from 'framer-motion';
import { IconLanguage, IconDeviceDesktop, IconBrandFigma } from '@tabler/icons-react';

export function SkillsSection() {
  const techSkills = [
    "Figma", "TypeScript", "JavaScript", "JSX", "HTML", "Sass", "Tailwind CSS",
    "Bootstrap", "Git", "React", "Redux", "Next.js"
  ];

  const languages = [
    { name: "Anglų k.", level: "įgudęs", percent: 90 },
    { name: "Rusų k.", level: "pažengęs", percent: 70 }
  ];

  const otherSkills = [
    "MS Office (Word, Excel) – profesionalus",
    "Apskaitos pr. „Būtent“ – įgudęs",
    "Grafikos dizainas (Canva, Illustrator) – profesionalus"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Įgūdžiai
        </motion.h2>

        {/* Tech Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <IconBrandFigma className="text-primary" /> Programavimas ir Web Technologijos
          </h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <IconLanguage className="text-primary" /> Užsienio kalbos
          </h3>
          <div className="space-y-4">
            {languages.map((lang, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-gray-500">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-primary h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <IconDeviceDesktop className="text-primary" /> Kiti įgūdžiai
          </h3>
          <ul className="space-y-2">
            {otherSkills.map((skill, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <span className="text-primary">✓</span> {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}