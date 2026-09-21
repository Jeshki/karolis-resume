'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { HomeSections } from 'src/components/HomeSections';
import { Reveal } from 'src/components/Reveal';

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
      <section id="about" className="relative pt-28 pb-16 px-4 bg-[#030303] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
          <Reveal className="w-full max-w-xl mx-auto">
            <Image
              src="/karolis-studio.jpg"
              alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
              width={1024}
              height={1024}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 576px"
            />
          </Reveal>

          <div className="text-center md:text-left">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Karolis Čibiras</h1>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-2xl md:text-3xl font-medium text-white mb-6">
                {t('Full-Stack programuotojas ir dizaineris', 'Full-Stack Developer & Designer')}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-lg text-white/80 max-w-xl mx-auto md:mx-0 mb-8">
                {t(
                  'Full-stack programuotojas ir dizaineris iš Kauno, Lietuvos. Kuriu modernias, greitas svetaines ir e-parduotuves su React, Next.js, TypeScript, WordPress/WooCommerce, Shopify, PHP, Node.js, Tailwind ir Figma. 18+ metų reali e-komercijos patirtis — UI/UX, SEO, našumas ir paleidimai. AI įrankius taikau visame procese — švaresniam ir greitesniam darbui. Atviras remote klientams visame pasaulyje.',
                  'Full-stack developer & designer based in Kaunas, Lithuania. I build modern, fast websites and e-commerce stores with React, Next.js, TypeScript, WordPress/WooCommerce, Shopify, PHP, Node.js, Tailwind and Figma. 18+ years of real e-commerce experience — UI/UX, SEO, performance and production launches. I apply AI tools end-to-end for cleaner, faster delivery. Open to remote clients worldwide.'
                )}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8 md:pr-0 pr-16">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-white/85 transition-colors"
              >
                {t('Peržiūrėti darbus', 'View work')}
                <IconArrowRight size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="/kontaktai"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                {t('Gauti pasiūlymą', 'Get a quote')}
              </Link>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mb-3 text-xs tracking-[0.18em] uppercase text-white/50">
                {t('Stiprybės', 'Strengths')}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start max-w-sm mx-auto md:mx-0">
                {strengths.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 border border-white/25 text-xs tracking-wide text-white"
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