'use client';

import { motion } from 'framer-motion';
import { IconBriefcase, IconPhone, IconCode } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('Freelance Web kūrėjas / Programuotojas', 'Freelance Web Developer / Programmer'),
      company: t('Individuali veikla', 'Self-Employed'),
      period: t('2025-11 – dabar', 'Nov 2025 – Present'),
      icon: <IconCode size={24} />,
      tasks: [
        t('Modernių web svetainių ir e-parduotuvių kūrimas nuo nulio', 'Building modern websites and e-commerce stores from scratch'),
        t('React, Next.js, headless sprendimai, custom WordPress', 'React, Next.js, headless, custom WordPress'),
        t('Aukščiausio lygio UI/UX ir dizaino sistema', 'High-end UI/UX and design systems'),
        t('DI integracija visuose etapuose', 'AI integration at every stage'),
      ],
      skills: 'React • Next.js • TypeScript • Python • Tailwind • Node.js • AI Tools',
    },
    {
      title: t('Web kūrėjas', 'Web Developer'),
      company: 'Bithub.lt',
      period: t('2025-09 – 2025-11', 'Sep 2025 – Nov 2025'),
      icon: <IconCode size={24} />,
      tasks: [
        t('Web svetainių ir e-parduotuvių kūrimas bei priežiūra', 'Development and maintenance of websites and e-shops'),
        t('Dizaino sprendimai, logotipai, vizualinis identitetas', 'Design, logos, visual identity'),
        t('WordPress, WooCommerce, Elementor, PHP', 'WordPress, WooCommerce, Elementor, PHP'),
        t('DI įrankiai procesų ir kodo optimizavimui', 'AI tools for code & process optimization'),
      ],
      skills: 'WordPress • WooCommerce • PHP • Figma • AI Tools',
    },
    {
      title: t('E-komercijos vadovas / IT specialistas', 'E-commerce Manager / IT Specialist'),
      company: 'UAB „Medikatus“',
      period: t('2008 – 2024-02', '2008 – Feb 2024'),
      icon: <IconBriefcase size={24} />,
      tasks: [
        t('16 metų e-parduotuvės plėtra, SEO, analitika', '16 years of e-shop development, SEO, analytics'),
        t('Tiekėjų derybos, komandos valdymas', 'Supplier negotiations and team management'),
      ],
    },
    {
      title: t('Klientų aptarnavimo konsultantas (IT)', 'IT Customer Support Consultant'),
      company: 'UAB „Lintel“',
      period: t('2006 – 2007', '2006 – 2007'),
      icon: <IconPhone size={24} />,
      tasks: [
        t('Techninė pagalba telefonu IT klausimais', 'Technical phone support on IT issues'),
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full"
        >
          <IconBriefcase size={26} className="text-primary" />
          {t('Darbo patirtis', 'Work Experience')}
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.skills ? (
                    <p className="text-sm italic text-gray-500">
                      <strong>{t('Technologijos:', 'Tech:')}</strong> {exp.skills}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
