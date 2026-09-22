'use client';

import Image from 'next/image';
import {
  DownloadSimple,
  EnvelopeSimple,
  Globe,
  ListChecks,
  MapPin,
  Phone,
  User,
} from '@phosphor-icons/react/dist/ssr';
import { useLanguage } from 'src/contexts/LanguageContext';
import { ABOUT_BIO } from 'src/lib/copy';
import { SITE } from 'src/lib/site';

export function ResumeHeader() {
  const { t } = useLanguage();

  const coreCompetencies = [
    t('React, Next.js, TypeScript', 'React, Next.js, TypeScript'),
    t('Expo, React Native, EAS', 'Expo, React Native, EAS'),
    t('Supabase ir Neon (Postgres)', 'Supabase & Neon (Postgres)'),
    t('Python ir Node.js back-end', 'Python & Node.js Back-End'),
    t('WordPress + WooCommerce + Elementor', 'WordPress + WooCommerce + Elementor'),
    t('PHP individualūs sprendimai', 'Custom PHP Solutions'),
    t('UI/UX dizainas ir Figma', 'UI/UX Design & Figma'),
    t('Dirbtinio intelekto įrankiai', 'Artificial Intelligence Tools'),
    t('Headless ir modernus stack’as', 'Headless & Modern Stack'),
    t('SEO bei performanso optimizacija', 'SEO & Performance Optimization'),
  ];

  const contacts = [
    { href: `mailto:${SITE.email}`, icon: EnvelopeSimple, label: SITE.email },
    { href: SITE.phoneHref, icon: Phone, label: SITE.phoneDisplay },
    { href: null, icon: MapPin, label: t(SITE.locationLt, SITE.locationEn) },
    { href: SITE.url, icon: Globe, label: 'karoliscibiras.lt' },
  ];

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 mb-16">
          <div className="shrink-0 rounded-full border border-black/20 p-[3px]">
            <div className="relative h-56 w-44 overflow-hidden rounded-full md:h-72 md:w-56">
              <Image
                src="/karolis-studio.jpg"
                alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
                width={1024}
                height={1024}
                className="h-full w-full object-cover object-[70%_18%]"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl tracking-tight mb-2">Karolis Čibiras</h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              {t('Full-Stack web ir mobiliųjų aplikacijų kūrėjas', 'Full-Stack Web & Mobile Developer')}
            </h2>
            <div className="flex flex-col sm:flex-wrap sm:flex-row gap-x-5 gap-y-2 justify-center md:justify-start mb-6 text-gray-600 text-sm">
              {contacts.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <Icon size={16} weight="light" /> {item.label}
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 hover:underline underline-offset-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <span key={item.label} className="inline-flex items-center gap-2">
                    {inner}
                  </span>
                );
              })}
            </div>
            <div className="flex justify-center md:justify-start print:hidden">
              <a
                href={SITE.cvPath}
                download={SITE.cvFilename}
                className="inline-flex items-center justify-center gap-1.5 text-sm bg-black text-white py-1.5 px-3.5 hover:bg-gray-800 transition-colors"
              >
                <DownloadSimple size={14} weight="light" /> {t('Atsisiųsti CV', 'Download CV')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl mb-4 inline-flex items-center gap-2">
              <User size={18} weight="light" />
              {t('Apie mane', 'About Me')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t(ABOUT_BIO.lt, ABOUT_BIO.en)}</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4 inline-flex items-center gap-2">
              <ListChecks size={18} weight="light" />
              {t('Pagrindinės kompetencijos', 'Core Competencies')}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
              {coreCompetencies.map((skill) => (
                <li key={skill} className="border-b border-black/10 pb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
