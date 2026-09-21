'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  LayoutTemplate,
  Globe,
  Rocket,
  Quote,
  BadgeCheck,
} from 'lucide-react';
import { Browser, Storefront, PenNib, Headset } from '@phosphor-icons/react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { Reveal } from 'src/components/Reveal';
import { useLanguage } from 'src/contexts/LanguageContext';
import { featuredProjects } from 'src/lib/projects';
import { SITE } from 'src/lib/site';

const iconProps = { size: 24, strokeWidth: 1.5 } as const;

export function HomeSections() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const services = [
    {
      n: '01',
      icon: Browser,
      title: t('Svetainės', 'Websites'),
      body: t(
        'Next.js arba WordPress — struktūra, greitis, SEO.',
        'Next.js or WordPress — structure, speed, SEO.'
      ),
      meta: t('Fiksuota kaina · 2–6 sav.', 'Fixed price · 2–6 wks'),
    },
    {
      n: '02',
      icon: Storefront,
      title: t('E-parduotuvės', 'E-commerce'),
      body: t(
        'WooCommerce ir Shopify — katalogas ir mokėjimai.',
        'WooCommerce and Shopify — catalog and payments.'
      ),
      meta: t('Fiksuota kaina · 3–8 sav.', 'Fixed price · 3–8 wks'),
    },
    {
      n: '03',
      icon: PenNib,
      title: t('UI / UX', 'UI / UX'),
      body: t(
        'Figma prototipai ir sąsajos, kurios padeda pirkti.',
        'Figma prototypes and interfaces that help people buy.'
      ),
      meta: t('Fiksuota kaina', 'Fixed price'),
    },
    {
      n: '04',
      icon: Headset,
      title: t('Palaikymas', 'Support'),
      body: t(
        'Atnaujinimai ir pataisymai veikiančioms svetainėms.',
        'Updates and fixes for sites already live.'
      ),
      meta: t('Mėnesinis arba pagal užduotį', 'Monthly or per task'),
    },
  ];

  const steps = [
    {
      n: '01',
      icon: MessageCircle,
      title: t('Briefing', 'Briefing'),
      body: t(
        'Tikslas, auditorija, terminas ir biudžetas. Po pokalbio — aiški apimtis, ne valandos.',
        'Goal, audience, deadline, and budget. After the call — a clear scope, not an hourly meter.'
      ),
    },
    {
      n: '02',
      icon: LayoutTemplate,
      title: t('Dizainas', 'Design'),
      body: t(
        'Struktūra ir UI: kas turi būti pirmame ekrane, kaip atrodo kelias iki veiksmo.',
        'Structure and UI: what belongs on the first screen, and how the path to action looks.'
      ),
    },
    {
      n: '03',
      icon: Globe,
      title: t('Build', 'Build'),
      body: t(
        'React/Next, WordPress arba Shopify — parinktas stack’as pagal projekto poreikį, ne mados.',
        'React/Next, WordPress, or Shopify — the stack that fits the project, not a trend.'
      ),
    },
    {
      n: '04',
      icon: Rocket,
      title: t('Paleidimas', 'Launch'),
      body: t(
        'Domenas, forma, analitika, perdavimas. Palieku veikiantį produktą, ne „beveik baigta“.',
        'Domain, forms, analytics, handoff. You get a working product, not an almost-done file.'
      ),
    },
  ];

  const proof = [
    {
      icon: Quote,
      title: t('Klientų atsiliepimai greitai', 'Client quotes coming soon'),
      body: t(
        'Renkame rašytines rekomendacijas. Kol kas socialinis įrodymas — vieši domenai ir LinkedIn.',
        'Written recommendations are being collected. Until then, social proof is live domains and LinkedIn.'
      ),
    },
    {
      icon: IconBrandLinkedin,
      title: t('LinkedIn', 'LinkedIn'),
      body: t(
        'Patirtis e-komercijoje ir web kūrime — profilis atviras kontaktui ir rekomendacijoms.',
        'E-commerce and web-build experience — the profile is open for contact and recommendations.'
      ),
      href: SITE.linkedin,
      cta: t('Atidaryti LinkedIn', 'Open LinkedIn'),
    },
    {
      icon: BadgeCheck,
      title: t('Fiksuota kaina, Kaunas / remote', 'Fixed price, Kaunas / remote'),
      body: t(
        'Dirbu su LT ir ES klientais. Apimtis sutariama iš anksto — be staigmenų sąskaitoje.',
        'I work with LT and EU clients. Scope is agreed up front — no invoice surprises.'
      ),
    },
  ];

  const hoverLift = reduceMotion ? undefined : { y: -3 };

  return (
    <>
      <section
        className="py-24 px-4 md:px-8 lg:px-10 bg-[#030303] text-white scroll-mt-24"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 md:gap-12 items-end mb-14 md:mb-16">
            <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              {t('Paslaugos', 'Services')}
            </h2>
            <p className="text-white/55 md:text-lg max-w-xl md:justify-self-end md:text-right">
              {t(
                'Fiksuota projekto kaina. Tipinė trukmė — orientyras, tiksli apimtis po briefing’o.',
                'Fixed project price. Typical duration is a guide — exact scope after briefing.'
              )}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  whileHover={hoverLift}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="group h-full min-h-[240px] p-7 md:p-9 flex flex-col border border-white/12 hover:border-white/35 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-10">
                    <span className="text-[11px] tracking-[0.22em] text-white/40">{service.n}</span>
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white group-hover:border-white/55 group-hover:bg-white group-hover:text-black transition-colors"
                      aria-hidden
                    >
                      <Icon size={28} weight="light" />
                    </span>
                  </div>
                  <h3 className="text-2xl tracking-wide mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-8 max-w-sm">{service.body}</p>
                  <p className="mt-auto text-[11px] uppercase tracking-[0.16em] text-white/40">
                    {service.meta}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 md:mt-14">
            <Link
              href="/kontaktai"
              className="inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {t('Gauti fiksuotą pasiūlymą', 'Get a fixed quote')}
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-10 scroll-mt-24" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold mb-3">
              {t('Kaip dirbu', 'How I work')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Keturi žingsniai nuo pokalbio iki paleidimo. Jūs visada žinote, kas vyksta toliau.',
                'Four steps from the first call to launch. You always know what happens next.'
              )}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.n}
                  whileHover={hoverLift}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full border border-black/15 p-7 flex flex-col"
                >
                  <p className="text-sm tracking-[0.24em] text-black mb-5">{step.n}</p>
                  <div className="text-black mb-5" aria-hidden>
                    <Icon {...iconProps} />
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-10 bg-gray-50" aria-labelledby="proof-heading">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 id="proof-heading" className="text-3xl md:text-4xl font-bold mb-3">
              {t('Atsiliepimai', 'Testimonials')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Klientų atsiliepimai greitai. Kol kas — vieši projektai ir LinkedIn.',
                'Client testimonials coming soon. For now — live projects and LinkedIn.'
              )}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {proof.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  whileHover={hoverLift}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-white border border-black/10 p-7 flex flex-col"
                >
                  <div className="text-black mb-4" aria-hidden>
                    <Icon {...iconProps} />
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-1 leading-relaxed">{item.body}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm tracking-wide hover:underline underline-offset-4"
                    >
                      {item.cta}
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </a>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 lg:px-10 scroll-mt-24" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold mb-3">
              {t('Pasirinkti darbai', 'Selected work')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Trys gyvi klientų domenai. Visa lentyna — darbų puslapyje.',
                'Three live client domains. The full set is on the work page.'
              )}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.slug}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full bg-white border border-black/15 flex flex-col hover:border-black"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={t(project.title.lt, project.title.en)}
                    fill
                    quality={90}
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 text-left">
                  <h3 className="text-2xl mb-2 tracking-tight">
                    {t(project.title.lt, project.title.en)}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                    {t(project.description.lt, project.description.en)}
                  </p>
                  <p className="text-[11px] tracking-wide text-gray-400 mb-5">
                    {project.technologies.join(' · ')}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm tracking-wide border-b border-black pb-0.5 w-fit hover:opacity-70 transition-opacity"
                  >
                    {t('Atidaryti', 'Open')}
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm tracking-wide hover:underline underline-offset-4"
            >
              {t('Visi darbai', 'All work')}
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
