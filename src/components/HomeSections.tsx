'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  IconArrowRight,
  IconBrandLinkedin,
  IconBuildingStore,
  IconCheck,
  IconDeviceDesktop,
  IconHeadset,
  IconLayout,
  IconMessageCircle,
  IconPalette,
  IconRocket,
  IconWorld,
} from '@tabler/icons-react';
import { Reveal } from 'src/components/Reveal';
import { useLanguage } from 'src/contexts/LanguageContext';
import { featuredProjects } from 'src/lib/projects';
import { SITE } from 'src/lib/site';

const iconProps = { size: 24, strokeWidth: 1.5 } as const;

export function HomeSections() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <IconDeviceDesktop {...iconProps} />,
      title: t('Svetainės', 'Websites'),
      body: t(
        'Next.js arba WordPress — struktūra, greitis, SEO.',
        'Next.js or WordPress — structure, speed, SEO.'
      ),
      meta: t('Fiksuota kaina · 2–6 sav.', 'Fixed price · 2–6 wks'),
    },
    {
      icon: <IconBuildingStore {...iconProps} />,
      title: t('E-parduotuvės', 'E-commerce'),
      body: t(
        'WooCommerce ir Shopify — katalogas ir mokėjimai.',
        'WooCommerce and Shopify — catalog and payments.'
      ),
      meta: t('Fiksuota kaina · 3–8 sav.', 'Fixed price · 3–8 wks'),
    },
    {
      icon: <IconPalette {...iconProps} />,
      title: t('UI / UX', 'UI / UX'),
      body: t(
        'Figma prototipai ir sąsajos, kurios padeda pirkti.',
        'Figma prototypes and interfaces that help people buy.'
      ),
      meta: t('Fiksuota kaina', 'Fixed price'),
    },
    {
      icon: <IconHeadset {...iconProps} />,
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
      icon: <IconMessageCircle {...iconProps} />,
      title: t('Briefing', 'Briefing'),
      body: t(
        'Tikslas, auditorija, terminas ir biudžetas. Po pokalbio — aiški apimtis, ne valandos.',
        'Goal, audience, deadline, and budget. After the call — a clear scope, not an hourly meter.'
      ),
    },
    {
      n: '02',
      icon: <IconLayout {...iconProps} />,
      title: t('Dizainas', 'Design'),
      body: t(
        'Struktūra ir UI: kas turi būti pirmame ekrane, kaip atrodo kelias iki veiksmo.',
        'Structure and UI: what belongs on the first screen, and how the path to action looks.'
      ),
    },
    {
      n: '03',
      icon: <IconWorld {...iconProps} />,
      title: t('Build', 'Build'),
      body: t(
        'React/Next, WordPress arba Shopify — parinktas stack’as pagal projekto poreikį, ne mados.',
        'React/Next, WordPress, or Shopify — the stack that fits the project, not a trend.'
      ),
    },
    {
      n: '04',
      icon: <IconRocket {...iconProps} />,
      title: t('Paleidimas', 'Launch'),
      body: t(
        'Domenas, forma, analitika, perdavimas. Palieku veikiantį produktą, ne „beveik baigta“.',
        'Domain, forms, analytics, handoff. You get a working product, not an almost-done file.'
      ),
    },
  ];

  const proof = [
    {
      title: t('Klientų atsiliepimai greitai', 'Client quotes coming soon'),
      body: t(
        'Renkame rašytines rekomendacijas. Kol kas socialinis įrodymas — vieši domenai ir LinkedIn.',
        'Written recommendations are being collected. Until then, social proof is live domains and LinkedIn.'
      ),
    },
    {
      title: t('LinkedIn', 'LinkedIn'),
      body: t(
        'Patirtis e-komercijoje ir web kūrime — profilis atviras kontaktui ir rekomendacijoms.',
        'E-commerce and web-build experience — the profile is open for contact and recommendations.'
      ),
      href: SITE.linkedin,
      cta: t('Atidaryti LinkedIn', 'Open LinkedIn'),
    },
    {
      title: t('Fiksuota kaina, Kaunas / remote', 'Fixed price, Kaunas / remote'),
      body: t(
        'Dirbu su LT ir ES klientais. Apimtis sutariama iš anksto — be staigmenų sąskaitoje.',
        'I work with LT and EU clients. Scope is agreed up front — no invoice surprises.'
      ),
    },
  ];

  return (
    <>
      <section className="py-20 px-4 bg-gray-50 scroll-mt-24" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-3">
              {t('Paslaugos', 'Services')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Fiksuota projekto kaina. Tipinė trukmė — orientyras, tiksli apimtis po briefing’o.',
                'Fixed project price. Typical duration is a guide — exact scope after briefing.'
              )}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Reveal key={service.title} className="h-full">
                <article className="h-full bg-black text-white p-7 flex flex-col">
                  <div className="mb-6 text-white" aria-hidden>
                    {service.icon}
                  </div>
                  <h3 className="text-xl tracking-wide mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">{service.body}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                    {service.meta}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 scroll-mt-24" aria-labelledby="process-heading">
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
            {steps.map((step) => (
              <Reveal key={step.n} className="h-full">
                <article className="h-full border border-black/15 p-7 flex flex-col">
                  <p className="text-[11px] tracking-[0.22em] text-gray-400 mb-5">{step.n}</p>
                  <div className="text-black mb-5" aria-hidden>
                    {step.icon}
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50" aria-labelledby="proof-heading">
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
            {proof.map((item) => (
              <Reveal key={item.title} className="h-full">
                <article className="h-full bg-white border border-black/10 p-7 flex flex-col">
                  <div className="text-black mb-4" aria-hidden>
                    {item.href ? <IconBrandLinkedin {...iconProps} /> : <IconCheck {...iconProps} />}
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
                      <IconArrowRight size={16} strokeWidth={1.5} />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 scroll-mt-24" aria-labelledby="featured-heading">
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
          <div className="grid md:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <Reveal key={project.slug} className="h-full">
                <article className="group h-full bg-white border border-black/15 flex flex-col transition-[border-color,transform] duration-200 hover:border-black hover:-translate-y-0.5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={t(project.title.lt, project.title.en)}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                      <IconArrowRight size={16} strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm tracking-wide hover:underline underline-offset-4"
            >
              {t('Visi darbai', 'All work')}
              <IconArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
