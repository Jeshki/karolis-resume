'use client';

import { useLanguage } from 'src/contexts/LanguageContext';
import { Mail, Phone, MapPin, Download, Globe, User, ListChecks } from 'lucide-react';
import Image from 'next/image';
import { SITE } from 'src/lib/site';
import { ABOUT_BIO } from 'src/lib/copy';

export function ResumeHeader() {
  const { t } = useLanguage();

  const coreCompetencies = [
    t('React, Next.js, TypeScript', 'React, Next.js, TypeScript'),
    t('Python ir Node.js back-end', 'Python & Node.js Back-End'),
    t('WordPress + WooCommerce + Elementor', 'WordPress + WooCommerce + Elementor'),
    t('Firebase, Neon ir PostgreSQL', 'Firebase, Neon and PostgreSQL'),
    t('Individualūs PHP sprendimai', 'Custom PHP Solutions'),
    t('UI/UX dizainas ir Figma', 'UI/UX Design & Figma'),
    t('Dirbtinio intelekto įrankiai', 'Artificial Intelligence Tools'),
    t('SEO, Stripe ir našumo optimizavimas', 'SEO, Stripe & performance'),
  ];

  const contacts = [
    { href: `mailto:${SITE.email}`, icon: Mail, label: SITE.email },
    { href: SITE.phoneHref, icon: Phone, label: SITE.phoneDisplay },
    { href: null, icon: MapPin, label: t(SITE.locationLt, SITE.locationEn) },
    { href: SITE.url, icon: Globe, label: 'karoliscibiras.lt' },
  ];

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 mb-14">
          <div className="shrink-0 w-44 h-56 md:w-52 md:h-64 overflow-hidden rounded-[50%]">
            <Image
              src="/karolis-studio.jpg"
              alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
              width={1024}
              height={1024}
              className="h-full w-full object-cover object-[center_20%]"
              priority
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Karolis Čibiras</h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              {t('Full-Stack programuotojas ir dizaineris', 'Full-Stack Developer & Designer')}
            </h2>
            <div className="flex flex-col sm:flex-wrap sm:flex-row gap-x-5 gap-y-2 justify-center md:justify-start mb-6 text-gray-600 text-sm">
              {contacts.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <Icon size={16} strokeWidth={1.5} /> {item.label}
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
                <Download size={14} strokeWidth={1.5} /> {t('Atsisiųsti CV', 'Download CV')}
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <User size={18} strokeWidth={1.5} />
              {t('Apie mane', 'About Me')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t(ABOUT_BIO.lt, ABOUT_BIO.en)}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <ListChecks size={18} strokeWidth={1.5} />
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
