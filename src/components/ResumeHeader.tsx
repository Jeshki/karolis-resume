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

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <Image
              src="/karolis-studio.jpg"
              alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
              width={1024}
              height={1024}
              className="w-56 h-auto md:w-64"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">Karolis Čibiras</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
            {t('Full-Stack programuotojas ir dizaineris', 'Full-Stack Developer & Designer')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 text-gray-600">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 justify-center hover:underline underline-offset-4">
              <Mail size={16} strokeWidth={1.5} /> {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="flex items-center gap-2 justify-center hover:underline underline-offset-4">
              <Phone size={16} strokeWidth={1.5} /> {SITE.phoneDisplay}
            </a>
            <span className="flex items-center gap-2 justify-center">
              <MapPin size={16} strokeWidth={1.5} /> {t(SITE.locationLt, SITE.locationEn)}
            </span>
            <a href={SITE.url} className="flex items-center gap-2 justify-center hover:underline underline-offset-4">
              <Globe size={16} strokeWidth={1.5} /> karoliscibiras.lt
            </a>
          </div>

          <div className="flex justify-center print:hidden">
            <a
              href={SITE.cvPath}
              download={SITE.cvFilename}
              className="inline-flex items-center justify-center gap-1.5 text-sm bg-black text-white py-1.5 px-3.5 hover:bg-gray-800 transition-colors"
            >
              <Download size={14} strokeWidth={1.5} /> {t('Atsisiųsti CV', 'Download CV')}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <User size={18} strokeWidth={1.5} />
              {t('Apie mane', 'About Me')}
            </h2>
            <p className="text-lg text-gray-700">{t(ABOUT_BIO.lt, ABOUT_BIO.en)}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <ListChecks size={18} strokeWidth={1.5} />
              {t('Pagrindinės kompetencijos', 'Core Competencies')}
            </h2>
            <ul className="grid gap-3 text-gray-700">
              {coreCompetencies.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
