'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from 'src/contexts/LanguageContext';
// Importuojame reikalingas ikonas
import { IconPhone, IconMail, IconMapPin, IconCode, IconDeviceDesktop, IconUsers, IconBrain, IconSparkles, IconStar } from '@tabler/icons-react';

export function HeroSection() {
  const { t } = useLanguage();

  const strengths = [
    { name: t('Front-End programavimas', 'Front-End Programming'), icon: <IconCode size={18} /> },
    { name: t('Dizaino supratimas', 'Design Understanding'), icon: <IconDeviceDesktop size={18} /> },
    { name: t('Verslo procesų patirtis', 'Business Process Experience'), icon: <IconBrain size={18} /> },
    { name: t('Nuolatinis mokymasis', 'Continuous Learning'), icon: <IconUsers size={18} /> },
  ];

  return (
    <motion.section
      id="about"
      className="py-24 px-4 min-h-screen flex items-center justify-center" // Atnaujintas padding
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Nuotraukos dalis (Kairė) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
        >
          <Image
            src="/karolis.jpg" // Įsitikinkite, kad įkėlėte nuotrauką į `public/karolis.jpg`
            alt={t('Karolis Čibiras - profilio nuotrauka', 'Karolis Čibiras - profile picture')}
            fill
            className="rounded-full object-cover object-[70%_50%] shadow-xl border-4 border-white"

            priority
          />
        </motion.div>

        {/* Teksto dalis (Dešinė) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="text-center md:text-left"
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Karolis Čibiras
          </motion.h1>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-2xl md:text-3xl font-medium text-black mb-6 inline-flex items-center gap-2 justify-center md:justify-start"
          >
            <IconSparkles size={20} className="text-primary" />
            {t('Full-Stack programuotojas ir dizaineris', 'Full-Stack Developer & Designer')}
          </motion.h2>

          {/* Kontaktai */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 text-black"
          >
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <IconMail size={18} /> karoliscibiras@gmail.com
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <IconPhone size={18} /> +370 603 02903
            </span>
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <IconMapPin size={18} /> Kaunas
            </span>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-black max-w-lg mx-auto md:mx-0 mb-6"
          >
            {t(
              'Esu Full-Stack programuotojas ir dizaineris, kuriantis modernias, greitas ir vartotojui patogias svetaines bei e. parduotuves. Dirbu su React, Next.js, TypeScript, WordPress ir UI/UX dizainu, o dirbtinio intelekto įrankius taikau visame kūrimo procese nuo idėjos iki paleidimo.',
              'I am a Full-Stack Developer & Designer building modern, high-performance, user-friendly websites and e-commerce projects. I work with React, Next.js, TypeScript, WordPress, and UI/UX design, while integrating AI tools across the entire process from concept to launch.'
            )}
          </motion.p>

          {/* Stiprybės */}
          <div className="mb-3 text-sm font-semibold text-primary inline-flex items-center gap-2">
            <IconStar size={18} />
            {t('Stiprybės', 'Strengths')}
          </div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            {strengths.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
