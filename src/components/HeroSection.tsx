'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { HomeSections } from 'src/components/HomeSections';
import { Reveal } from 'src/components/Reveal';
import { ABOUT_BIO, STRENGTHS } from 'src/lib/copy';

export function HeroSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const strengths = STRENGTHS.map((item) => t(item.lt, item.en));

  return (
    <>
      <section id="about" className="relative pt-28 pb-16 px-4 bg-[#030303] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
          <Reveal className="w-full max-w-xl mx-auto">
            <div className="relative">
              <Image
                src="/karolis-studio.jpg"
                alt={t('Karolis Čibiras — profilio nuotrauka', 'Karolis Čibiras — profile picture')}
                width={1024}
                height={1024}
                className="w-full h-auto block"
                priority
                sizes="(max-width: 768px) 100vw, 576px"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
              >
                <div className="absolute inset-0 backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_75%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
              </div>
            </div>
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
                {t(ABOUT_BIO.lt, ABOUT_BIO.en)}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start mb-8">
              <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                <Link
                  href="/portfolio"
                  className="inline-flex w-full max-w-[260px] sm:w-auto sm:max-w-none items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-white/85 transition-colors"
                >
                  {t('Peržiūrėti darbus', 'View work')}
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </motion.div>
              <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                <Link
                  href="/kontaktai"
                  className="inline-flex w-full max-w-[260px] sm:w-auto sm:max-w-none items-center justify-center gap-2 border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                >
                  {t('Gauti pasiūlymą', 'Get a quote')}
                </Link>
              </motion.div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mb-3 text-xs tracking-[0.18em] uppercase text-white/50">
                {t('Stiprybės', 'Strengths')}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start max-w-xl mx-auto md:mx-0">
                {strengths.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={reduceMotion ? undefined : { y: -1 }}
                    className="px-2.5 py-1 border border-white/25 text-xs tracking-wide text-white"
                  >
                    {skill}
                  </motion.span>
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