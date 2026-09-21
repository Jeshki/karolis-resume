'use client';

import { useLanguage } from 'src/contexts/LanguageContext';
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconFileDownload,
  IconWorld,
  IconUser,
  IconListCheck,
} from '@tabler/icons-react';
import Image from 'next/image';
import { SITE } from 'src/lib/site';

export function ResumeHeader() {
  const { t } = useLanguage();

  const coreCompetencies = [
    t('React, Next.js, TypeScript', 'React, Next.js, TypeScript'),
    t('Python ir Node.js back-end', 'Python & Node.js Back-End'),
    t('WordPress + WooCommerce + Elementor', 'WordPress + WooCommerce + Elementor'),
    t('Individualūs PHP sprendimai', 'Custom PHP Solutions'),
    t('UI/UX dizainas ir Figma', 'UI/UX Design & Figma'),
    t('Dirbtinio intelekto įrankiai', 'Artificial Intelligence Tools'),
    t('Headless ir modernus stack', 'Headless & Modern Stack'),
    t('SEO ir našumo optimizavimas', 'SEO & Performance Optimization'),
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <Image
              src="/karolis.jpg"
              alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
              width={120}
              height={120}
              className="rounded-full object-cover object-[center_32%] border border-black/10 shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">Karolis Čibiras</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
            {t('Full-Stack programuotojas ir dizaineris', 'Full-Stack Developer & Designer')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 text-gray-600">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 justify-center hover:underline underline-offset-4">
              <IconMail size={18} /> {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="flex items-center gap-2 justify-center hover:underline underline-offset-4">
              <IconPhone size={18} /> {SITE.phoneDisplay}
            </a>
            <span className="flex items-center gap-2 justify-center">
              <IconMapPin size={18} /> {t(SITE.locationLt, SITE.locationEn)}
            </span>
            <a href={SITE.url} className="flex items-center gap-2 justify-center hover:underline underline-offset-4">
              <IconWorld size={18} /> karoliscibiras.lt
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            <a
              href={SITE.cvPath}
              download={SITE.cvFilename}
              className="bg-black text-white py-2 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <IconFileDownload size={18} /> {t('Atsisiųsti CV (EN)', 'Download CV (EN)')}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <IconUser size={20} className="text-primary" />
              {t('Apie mane', 'About Me')}
            </h2>
            <p className="text-lg text-gray-700">
              {t(
                'Full-Stack programuotojas ir dizaineris su 18+ metų patirtimi. Kuriu šiuolaikines svetaines ir el. parduotuves naudojant React, Next.js, WordPress, WooCommerce bei Shopify. Aktyviai naudoju dirbtinį intelektą visose kūrimo stadijose. Projektai — fiksuota kaina, Kaunas / remote LT+EU.',
                'Full-Stack Developer & Designer with 18+ years of experience. Building modern websites and e-commerce platforms using React, Next.js, WordPress, WooCommerce, and Shopify. Actively integrating AI tools throughout the entire development process. Projects are fixed-price, from Kaunas / remote LT+EU.'
              )}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <IconListCheck size={20} className="text-primary" />
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
