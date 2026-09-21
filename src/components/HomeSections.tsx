'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  IconArrowRight,
  IconBrandLinkedin,
  IconBuildingStore,
  IconCheck,
  IconClock,
  IconDeviceDesktop,
  IconHeadset,
  IconLayout,
  IconMessageCircle,
  IconPalette,
  IconRocket,
  IconSparkles,
  IconWorld,
} from '@tabler/icons-react';
import { Reveal } from 'src/components/Reveal';
import { useLanguage } from 'src/contexts/LanguageContext';
import { featuredProjects } from 'src/lib/projects';
import { SITE } from 'src/lib/site';

export function HomeSections() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <IconDeviceDesktop size={24} />,
      title: t('Svetainės', 'Websites'),
      body: t(
        'Įmonių ir produktų svetainės su Next.js arba WordPress. Aiški struktūra, greitis ir SEO pagrindai.',
        'Company and product sites on Next.js or WordPress. Clear structure, speed, and SEO basics.'
      ),
      meta: t('Tipiškai 2–6 sav. · fiksuota kaina', 'Typically 2–6 weeks · fixed price'),
    },
    {
      icon: <IconBuildingStore size={24} />,
      title: t('E-parduotuvės', 'E-commerce'),
      body: t(
        'WooCommerce ir Shopify parduotuvės: katalogas, mokėjimai, valdymas be kasdienio programuotojo.',
        'WooCommerce and Shopify stores: catalog, payments, and day-to-day management without a developer.'
      ),
      meta: t('Tipiškai 3–8 sav. · fiksuota kaina', 'Typically 3–8 weeks · fixed price'),
    },
    {
      icon: <IconPalette size={24} />,
      title: t('UI / UX', 'UI / UX'),
      body: t(
        'Figma prototipai, vizualas ir sąsajos, kurios padeda lankytojui greitai suprasti ir pirkti.',
        'Figma prototypes, visuals, and interfaces that help visitors understand and buy faster.'
      ),
      meta: t('Prieš build’ą arba atskirai · fiksuota kaina', 'Before build or standalone · fixed price'),
    },
    {
      icon: <IconHeadset size={24} />,
      title: t('Palaikymas', 'Support'),
      body: t(
        'Atnaujinimai, pataisymai ir smulkūs plėtiniai jau veikiančioms svetainėms bei parduotuvėms.',
        'Updates, fixes, and small extensions for sites and stores already in production.'
      ),
      meta: t('Mėnesinis arba pagal užduotį', 'Monthly or per task'),
    },
  ];

  const steps = [
    {
      n: '01',
      icon: <IconMessageCircle size={22} />,
      title: t('Briefing', 'Briefing'),
      body: t(
        'Tikslas, auditorija, terminas ir biudžetas. Po pokalbio — aiški apimtis, ne valandos.',
        'Goal, audience, deadline, and budget. After the call — a clear scope, not an hourly meter.'
      ),
    },
    {
      n: '02',
      icon: <IconLayout size={22} />,
      title: t('Dizainas', 'Design'),
      body: t(
        'Struktūra ir UI: kas turi būti pirmame ekrane, kaip atrodo kelias iki veiksmo.',
        'Structure and UI: what belongs on the first screen, and how the path to action looks.'
      ),
    },
    {
      n: '03',
      icon: <IconWorld size={22} />,
      title: t('Build', 'Build'),
      body: t(
        'React/Next, WordPress arba Shopify — parinktas stack’as pagal projekto poreikį, ne mados.',
        'React/Next, WordPress, or Shopify — the stack that fits the project, not a trend.'
      ),
    },
    {
      n: '04',
      icon: <IconRocket size={22} />,
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
      <section className="py-20 px-4 bg-gray-50" aria-labelledby="services-heading">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05} className="h-full">
                <article className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm flex-1 mb-4">{service.body}</p>
                  <p className="text-sm font-medium inline-flex items-center gap-2 text-gray-800">
                    <IconClock size={16} />
                    {service.meta}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" aria-labelledby="process-heading">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05} className="h-full">
                <article className="h-full rounded-2xl border border-gray-200 p-6">
                  <p className="text-sm font-bold text-gray-400 mb-3">{step.n}</p>
                  <div className="text-primary mb-3">{step.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.body}</p>
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
          <div className="grid md:grid-cols-3 gap-6">
            {proof.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05} className="h-full">
                <article className="h-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {item.href ? <IconBrandLinkedin size={20} /> : <IconCheck size={20} />}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{item.body}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
                    >
                      {item.cta}
                      <IconArrowRight size={16} />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold mb-3 inline-flex items-center gap-2 justify-center">
              <IconSparkles size={26} className="text-primary" />
              {t('Pasirinkti darbai', 'Selected work')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                'Trys gyvi klientų domenai. Visa lentyna — darbų puslapyje.',
                'Three live client domains. The full set is on the work page.'
              )}
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06} className="h-full">
                <article className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={t(project.title.lt, project.title.en)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 text-left">
                    <h3 className="font-bold text-xl mb-2">{t(project.title.lt, project.title.en)}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {t(project.description.lt, project.description.en)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="flex-1 border-2 border-black text-center py-2 px-4 rounded font-medium hover:bg-black hover:text-white transition-colors"
                      >
                        {t('Case study', 'Case study')}
                      </Link>
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-black text-white text-center py-2 px-4 rounded font-medium hover:bg-gray-800 transition-colors"
                        >
                          Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
            >
              {t('Visi darbai', 'All work')}
              <IconArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
