'use client';

import { useLanguage } from 'src/contexts/LanguageContext';
import { IconPhone, IconMail, IconMapPin, IconFileDownload, IconWorld, IconUser, IconListCheck } from '@tabler/icons-react';
import Image from 'next/image';

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
        {/* Antraštė ir kontaktai */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <Image
              src="/karolis.jpg"
              alt="Karolis Žibiras"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">Karolis Čibiras</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
            {t('Front-End & Full-Stack Web kūrėjas', 'Front-End & Full-Stack Web Developer')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 text-gray-600">
            <span className="flex items-center gap-2 justify-center">
              <IconMail size={18} /> karoliscibiras@gmail.com
            </span>
            <span className="flex items-center gap-2 justify-center">
              <IconPhone size={18} /> +370 603 02903
            </span>
            <span className="flex items-center gap-2 justify-center">
              <IconMapPin size={18} /> {t('Kaunas, Lietuva', 'Kaunas, Lithuania')}
            </span>
            <span className="flex items-center gap-2 justify-center">
              <IconWorld size={18} /> www.karoliscibiras.lt
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            {/* SVARBU: paliktas vienas CV failas public/ Karolio-CV-EN.pdf */}
            <a
              href="/Karolio-CV-EN.pdf"
              download
              className="bg-black text-white py-2 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
            >
              <IconFileDownload size={18} /> {t('Atsisiųsti CV (LT/EN)', 'Download CV (LT/EN)')}
            </a>
          </div>
        </div>

        {/* Apie mane ir kompetencijos */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Apie mane tekstas */}
          <div>
            <h3 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <IconUser size={20} className="text-primary" />
              {t('Apie mane', 'About Me')}
            </h3>
            <p className="text-lg text-gray-700">
              {t(
                'Front-End / Full-Stack programuotojas ir dizaineris su 18+ metų patirtimi. Kuriu šiuolaikines svetaines ir el. parduotuves naudojant React, Next.js, WordPress, WooCommerce bei Shopify. Aktyviai naudoju dirbtinį intelektą visose kūrimo stadijose.',
                'Front-End / Full-Stack Developer & Designer with 18+ years of experience. Building modern websites and e-commerce platforms using React, Next.js, WordPress, WooCommerce, and Shopify. Actively integrating AI tools throughout the entire development process.'
              )}
            </p>
          </div>

          {/* Pagrindinės kompetencijos */}
          <div>
            <h3 className="text-2xl font-bold mb-4 inline-flex items-center gap-2">
              <IconListCheck size={20} className="text-primary" />
              {t('Pagrindinės kompetencijos', 'Core Competencies')}
            </h3>
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
