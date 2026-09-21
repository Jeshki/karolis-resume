'use client';

import { Briefcase, ChartLine, Code, Headset } from '@phosphor-icons/react/dist/ssr';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from 'src/contexts/LanguageContext';
import { Reveal } from 'src/components/Reveal';

export function ExperienceSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const hoverLift = reduceMotion ? undefined : { y: -3 };

  const experiences = [
    {
      n: '01',
      title: t('Freelance Web kūrėjas / Programuotojas', 'Freelance Web Developer / Programmer'),
      company: t('Individuali veikla', 'Self-Employed'),
      period: t('2025-11 – dabar', 'Nov 2025 – Present'),
      icon: Code,
      tasks: [
        t(
          'Modernių web svetainių ir e-parduotuvių kūrimas nuo nulio',
          'Building modern websites and e-commerce stores from scratch'
        ),
        t(
          'React, Next.js, headless sprendimai, custom WordPress',
          'React, Next.js, headless, custom WordPress'
        ),
        t('Aukščiausio lygio UI/UX ir dizaino sistema', 'High-end UI/UX and design systems'),
        t('DI integracija visuose etapuose', 'AI integration at every stage'),
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Python', 'Tailwind', 'Node.js', 'AI Tools'],
    },
    {
      n: '02',
      title: t('Web kūrėjas', 'Web Developer'),
      company: 'Bithub.lt',
      period: t('2025-09 – 2025-11', 'Sep 2025 – Nov 2025'),
      icon: Briefcase,
      tasks: [
        t(
          'Web svetainių ir e-parduotuvių kūrimas bei priežiūra',
          'Development and maintenance of websites and e-shops'
        ),
        t(
          'Dizaino sprendimai, logotipai, vizualinis identitetas',
          'Design, logos, visual identity'
        ),
        t('WordPress, WooCommerce, Elementor, PHP', 'WordPress, WooCommerce, Elementor, PHP'),
        t(
          'DI įrankiai procesų ir kodo optimizavimui',
          'AI tools for code & process optimization'
        ),
      ],
      skills: ['WordPress', 'WooCommerce', 'PHP', 'Figma', 'AI Tools'],
    },
    {
      n: '03',
      title: t('E-komercijos vadovas / IT specialistas', 'E-commerce Manager / IT Specialist'),
      company: 'UAB „Medikatus“',
      period: t('2008 – 2024-02', '2008 – Feb 2024'),
      icon: ChartLine,
      tasks: [
        t(
          '16 metų e-parduotuvės plėtra, SEO, analitika',
          '16 years of e-shop development, SEO, analytics'
        ),
        t('Tiekėjų derybos, komandos valdymas', 'Supplier negotiations and team management'),
      ],
    },
    {
      n: '04',
      title: t('Klientų aptarnavimo konsultantas (IT)', 'IT Customer Support Consultant'),
      company: 'UAB „Lintel“',
      period: t('2006 – 2007', '2006 – 2007'),
      icon: Headset,
      tasks: [
        t(
          'Techninė pagalba telefonu IT klausimais',
          'Technical phone support on IT issues'
        ),
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl text-center mb-12 inline-flex items-center gap-2 justify-center w-full">
            <Briefcase size={26} weight="light" />
            {t('Darbo patirtis', 'Work Experience')}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.article
                key={`${exp.company}-${exp.n}`}
                whileHover={hoverLift}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-white border border-black/10 hover:border-black/30 p-7 flex flex-col transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15">
                      <Icon size={22} weight="light" />
                    </span>
                    <span className="text-[11px] tracking-[0.2em] text-gray-400">{exp.n}</span>
                  </span>
                  <p className="border border-black/10 px-2.5 py-1 text-[11px] tracking-[0.12em] uppercase text-gray-500">
                    {exp.period}
                  </p>
                </div>
                <h3 className="text-xl mb-1">{exp.title}</h3>
                <p className="text-gray-700 mb-4">{exp.company}</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {exp.tasks.map((task) => (
                    <li key={task} className="text-gray-600 text-sm leading-relaxed pl-3 border-l border-black/15">
                      {task}
                    </li>
                  ))}
                </ul>
                {exp.skills ? (
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-black/10 px-2 py-0.5 text-[11px] tracking-wide text-gray-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
