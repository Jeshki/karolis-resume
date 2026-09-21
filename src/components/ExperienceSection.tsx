'use client';

import { IconBriefcase, IconPhone, IconCode } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { Reveal } from 'src/components/Reveal';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('Freelance Web kūrėjas / Programuotojas', 'Freelance Web Developer / Programmer'),
      company: t('Individuali veikla', 'Self-Employed'),
      period: t('2025-11 – dabar', 'Nov 2025 – Present'),
      icon: <IconCode size={24} />,
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
      title: t('Web kūrėjas', 'Web Developer'),
      company: 'Bithub.lt',
      period: t('2025-09 – 2025-11', 'Sep 2025 – Nov 2025'),
      icon: <IconCode size={24} />,
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
      title: t('E-komercijos vadovas / IT specialistas', 'E-commerce Manager / IT Specialist'),
      company: 'UAB „Medikatus“',
      period: t('2008 – 2024-02', '2008 – Feb 2024'),
      icon: <IconBriefcase size={24} />,
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
      title: t('Klientų aptarnavimo konsultantas (IT)', 'IT Customer Support Consultant'),
      company: 'UAB „Lintel“',
      period: t('2006 – 2007', '2006 – 2007'),
      icon: <IconPhone size={24} />,
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
            <IconBriefcase size={26} className="text-primary" />
            {t('Darbo patirtis', 'Work Experience')}
          </h2>
        </Reveal>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={Math.min(i * 0.06, 0.2)}>
              <article className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">{exp.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-gray-600">
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
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
