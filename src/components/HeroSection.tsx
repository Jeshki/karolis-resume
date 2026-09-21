'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowRight,
} from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { HomeSections } from 'src/components/HomeSections';
import { Reveal } from 'src/components/Reveal';
import { SITE } from 'src/lib/site';

export function HeroSection() {
  const { t } = useLanguage();

  const strengths = [
    t('Front-End programavimas', 'Front-End Programming'),
    t('Dizaino supratimas', 'Design Understanding'),
    t('Verslo procesų patirtis', 'Business Process Experience'),
    t('Nuolatinis mokymasis', 'Continuous Learning'),
  ];

  return (
    <>
      <section id="about" className="relative pt-28 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
          <Reveal className="w-full max-w-xl mx-auto">
            <Image
              src="/karolis-studio.jpg"
              alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
              width={1024}
              height={1024}
              className="w-full h-auto shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </Reveal>

          <div className="text-center md:text-left">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Karolis Čibiras</h1>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-2xl md:text-3xl font-medium text-black mb-6">
                {t('Full-Stack programuotojas ir dizaineris', 'Full-Stack Developer & Designer')}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 text-black">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 justify-center md:justify-start hover:underline underline-offset-4"
              >
                <IconMail size={18} /> {SITE.email}
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 justify-center md:justify-start hover:underline underline-offset-4"
              >
                <IconPhone size={18} /> {SITE.phoneDisplay}
              </a>
              <span className="flex items-center gap-2 justify-center md:justify-start">
                <IconMapPin size={18} /> {t('Kaunas', 'Kaunas')}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-black max-w-lg mx-auto md:mx-0 mb-8">
                {t(
                  'Kurių modernias svetaines ir e-parduotuves fiksuota kaina — React, Next.js, WordPress/WooCommerce ir Shopify. Dirbu iš Kauno su LT ir ES klientais, nuo briefing’o iki paleidimo.',
                  'I build modern websites and e-commerce stores at a fixed price — React, Next.js, WordPress/WooCommerce, and Shopify. Based in Kaunas, working with LT and EU clients from briefing to launch.'
                )}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8 md:pr-0 pr-16">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                {t('Peržiūrėti darbus', 'View work')}
                <IconArrowRight size={18} />
              </Link>
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center gap-2 border-2 border-black text-black py-3 px-6 rounded-lg font-medium hover:bg-black hover:text-white transition-colors"
              >
                {t('Gauti pasiūlymą', 'Get a quote')}
              </Link>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mb-3 text-xs tracking-[0.18em] uppercase text-gray-500">
                {t('Stiprybės', 'Strengths')}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {strengths.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 border border-black/15 text-xs tracking-wide text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <HomeSections />
    </>
  );
}