'use client';

import { Briefcase, Code, Phone, ChartLine } from '@phosphor-icons/react/dist/ssr';
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
          'Fiksuotos kainos projektai LT/EU klientams — svetainės ir e-parduotuvės nuo briefing’o iki paleidimo',
          'Fixed-price projects for LT/EU clients — sites and stores from briefing to launch'
        ),
        t(
          'Live produktai viešuose domenuose: DAEI birža, Apolobook, Shopify ir WooCommerce parduotuvės',
          'Live products on public domains: DAEI Exchange, Apolobook, Shopify and WooCommerce stores'
        ),
        t(
          'React/Next.js, WordPress ir Shopify pagal projekto poreikį — ne stack’as dėl mados',
          'React/Next.js, WordPress, or Shopify based on the project — not a stack for fashion'
        ),
      ],
      skills: 'React • Next.js • TypeScript • Python • Tailwind • Node.js • AI Tools',
    },
    {
      n: '02',
      title: t('Web kūrėjas', 'Web Developer'),
      company: 'Bithub.lt',
      period: t('2025-09 – 2025-11', 'Sep 2025 – Nov 2025'),
      icon: Code,
      tasks: [
        t(
          'Kūriau ir prižiūrėjau WordPress / WooCommerce svetaines ir e-parduotuves trumpame, intensyviame cikle',
          'Built and maintained WordPress / WooCommerce sites and stores in a short, intense cycle'
        ),
        t(
          'Dizaino sprendimai — logotipai ir vizualinis identitetas, ne tik šablonų sujungimas',
          'Design work — logos and visual identity, not only assembling templates'
        ),
        t(
          'PHP, Elementor ir DI įrankiai, kad pataisymai ir nauji puslapiai išeitų greičiau',
          'PHP, Elementor, and AI tools so fixes and new pages shipped faster'
        ),
      ],
      skills: 'WordPress • WooCommerce • PHP • Figma • AI Tools',
    },
    {
      n: '03',
      title: t('E-komercijos vadovas / IT specialistas', 'E-commerce Manager / IT Specialist'),
      company: 'UAB „Medikatus“',
      period: t('2008 – 2024-02', '2008 – Feb 2024'),
      icon: ChartLine,
      tasks: [
        t(
          '16 metų e-parduotuvės augimas: asortimentas, SEO, analitika ir kasdienės operacijos',
          '16 years growing an e-shop: assortment, SEO, analytics, and daily operations'
        ),
        t(
          'Tiekėjų derybos ir komandos valdymas — rezultatas matomas pardavimuose, ne tik „IT palaikyme“',
          'Supplier negotiations and team leadership — outcomes in sales, not only “IT support”'
        ),
      ],
    },
    {
      n: '04',
      title: t('Klientų aptarnavimo konsultantas (IT)', 'IT Customer Support Consultant'),
      company: 'UAB „Lintel“',
      period: t('2006 – 2007', '2006 – 2007'),
      icon: Phone,
      tasks: [
        t(
          'Techninė pagalba telefonu — greitas problemos išsiaiškinimas ir konkretus sprendimas klientui',
          'Phone technical support — diagnosing the issue quickly and giving the client a concrete fix'
        ),
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full">
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
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15">
                      <Icon size={22} weight="light" />
                    </span>
                    <span className="text-[11px] tracking-[0.2em] text-gray-400">{exp.n}</span>
                  </span>
                  <p className="text-xs tracking-wide text-gray-500 text-right">{exp.period}</p>
                </div>
                <h3 className="text-xl mb-1">{exp.title}</h3>
                <p className="text-gray-700 mb-4">{exp.company}</p>
                <ul className="space-y-2 mb-4 flex-1">
                  {exp.tasks.map((task) => (
                    <li key={task} className="text-gray-600 text-sm leading-relaxed pl-3 border-l border-black/15">
                      {task}
                    </li>
                  ))}
                </ul>
                {exp.skills ? (
                  <p className="mt-auto text-xs tracking-wide text-gray-500">{exp.skills}</p>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
