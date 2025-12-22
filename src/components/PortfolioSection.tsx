'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  IconChevronLeft,
  IconChevronRight,
  IconCode,
  IconExternalLink,
  IconEye,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from 'src/contexts/LanguageContext';

import banner1 from 'src/designs/baners/baner1.jpg';
import banner2 from 'src/designs/baners/baner2.png';
import banner3 from 'src/designs/baners/baner3.jpg';
import banner4 from 'src/designs/baners/baner4.jpg';
import bannerBellShirts from 'src/designs/baners/bell-shirts.png';
import bannerBlackFriday from 'src/designs/baners/black friday.jpg';
import bannerBlackFriday2 from 'src/designs/baners/black-friday-2.jpg';
import bannerLavincius5 from 'src/designs/baners/lavincius-5.jpg';
import bannerNuolaida4 from 'src/designs/baners/nuolaida-4.jpg';
import bannerSmacio from 'src/designs/baners/smacio.jpg';
import bannerVaikaiPng from 'src/designs/baners/vaikai.png';

import logoEra from 'src/designs/logo/era.jpeg';
import logoBell from 'src/designs/logo/bell.png';
import logoDusofi from 'src/designs/logo/dusofi.png';
import logoJmDekoras from 'src/designs/logo/jmdekoras.svg';
import logoLavincius from 'src/designs/logo/lavincius.png';
import logoNefbook from 'src/designs/logo/nefbook.svg';


export function PortfolioSection() {
  const { t } = useLanguage();
  const bannerSliderRef = useRef<HTMLDivElement | null>(null);

  const scrollBanners = (direction: 'left' | 'right') => {
    const slider = bannerSliderRef.current;
    if (!slider) return;
    const amount = Math.round(slider.clientWidth * 0.85);
    slider.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const projects = [
    {
      title: t('Dusofi svetainė', 'Dusofi website'),
      description: t(
        'Ši svetainė sukurta siekiant pasidalinti nesenstančia išmintimi · įkvepiančiais žodžiais',
        'This website was created from a desire to share timeless wisdom · words that inspire, encourage reflection, and offer new perspectives.'
      ),
      image: '/dusofi.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://www.dusofi.lt',
      githubLink: 'https://github.com/Jeshki/dusofi-full',
    },
    {
      title: t('JM Dekoras', 'JM Dekoras'),
      description: t(
        'Svetainė, skirta švenčių planavimui, dekoravimui ir unikalioms žvakėms.',
        'A website for event planning, decoration, and unique candles.'
      ),
      image: '/jmdekoras.png',
      technologies: ['Shopify'],
      liveLink: 'https://www.jmdekoras.lt',
    },
    {
      title: t('BSO svetainė', 'BSO Website'),
      description: t(
        'Verslo svetainė (webdemo), sukurta naudojant WordPress ir Elementor.',
        'Business website (webdemo), built with WordPress and Elementor.'
      ),
      image: '/bso.png',
      technologies: ['WordPress', 'Elementor', 'PHP'],
      liveLink: 'https://bso.webdemo.lt',
    },
    {
      title: t('Papildų Sala', 'Supplement Island'),
      description: t(
        'Elektroninė parduotuvė, prekiaujanti maisto papildais. Sukurta su WordPress ir WooCommerce.',
        'An e-commerce store selling food supplements. Built with WordPress and WooCommerce.'
      ),
      image: '/papildusala.png',
      technologies: ['WordPress', 'WooCommerce', 'PHP'],
      liveLink: 'https://papildusala.lt/',
    },
    {
      title: t('Čiu?inių Sala', 'Mattress Island'),
      description: t(
        'Elektroninė parduotuvė, prekiaujanti čiu?iniais ir lovomis. Sukurta su WordPress ir WooCommerce.',
        'An e-commerce store selling mattresses and beds. Built with WordPress and WooCommerce.'
      ),
      image: '/ciuziniusala.png',
      technologies: ['WordPress', 'WooCommerce', 'PHP'],
      liveLink: 'https://ciuziniusala.lt/',
    },
    {
      title: t('Doviles Resume', 'Doviles Resume'),
      description: t(
        'Moderni ir interaktyvi CV svetainė, skirta pristatyti Dovilės profesinę patirtį.',
        "A modern and interactive resume website built to showcase Dovile's professional experience."
      ),
      image: '/doviles.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://doviles-resume.vercel.app//',
    },
  ];


  const bannerSlides = [
    { src: banner1, alt: t('Baneris: Kolekcija', 'Banner: Collection') },
    { src: banner2, alt: t('Baneris: Akcija', 'Banner: Sale') },
    { src: banner3, alt: t('Baneris: Kolekcija 2', 'Banner: Collection 2') },
    { src: banner4, alt: t('Baneris: Kolekcija 3', 'Banner: Collection 3') },
    { src: bannerBellShirts, alt: t('Baneris: Marškinėliai', 'Banner: Shirts') },
    { src: bannerBlackFriday, alt: t('Baneris: Black Friday', 'Banner: Black Friday') },
    { src: bannerBlackFriday2, alt: t('Baneris: Black Friday 2', 'Banner: Black Friday 2') },
    { src: bannerLavincius5, alt: t('Baneris: Lavincius 5', 'Banner: Lavincius 5') },
    { src: bannerNuolaida4, alt: t('Baneris: Nuolaida', 'Banner: Discount') },
    { src: bannerSmacio, alt: t('Baneris: Smacio', 'Banner: Smacio') },
    { src: bannerVaikaiPng, alt: t('Baneris: Vaikai (PNG)', 'Banner: Kids (PNG)') },
  ];

  const logos = [
    { image: logoEra, name: 'Era' },
    { image: logoBell, name: 'Bell' },
    { image: logoDusofi, name: 'Dusofi' },
    { image: logoJmDekoras, name: 'JM Dekoras' },
    { image: logoLavincius, name: 'Lavincius' },
    { image: logoNefbook, name: 'Nefbook' },
  ];

  const videos = [
    { src: '/designs/video/lavinicius.mp4', title: 'Lavincius' },
    { src: '/designs/video/lavincius-2.mp4', title: 'Lavincius 2' },
    { src: '/designs/video/lavincius-3.mp4', title: 'Lavincius 3' },
    { src: '/designs/video/pyktis.mp4', title: t('Pyktis', 'Anger') },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          {t('Portfolio', 'Portfolio')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          {t(
            'Mano naujausi projektai · nuo e-komercijos iki UX/UI prototipų.',
            'My latest projects · from e-commerce to UX/UI prototypes.'
          )}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <IconEye size={32} className="text-white" />
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-black text-white py-2 px-4 rounded text-center transition flex items-center justify-center gap-1"
                  >
                    <IconExternalLink size={16} /> {t('Demo', 'Demo')}
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-gray-500 hover:text-primary transition"
                    >
                      <IconCode size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mt-20"
        >
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {t('Baneriai', 'Banners')}
              </h3>
              <p className="text-gray-600 mt-2">
                {t('Visi reklaminiai baneriai vienoje vietoje.', 'All promo banners in one place.')}
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollBanners('left')}
                className="h-10 w-10 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                aria-label={t('Slinkti kairėn', 'Scroll left')}
              >
                <IconChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollBanners('right')}
                className="h-10 w-10 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                aria-label={t('Slinkti dešinėn', 'Scroll right')}
              >
                <IconChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={bannerSliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          >
            {bannerSlides.map((banner) => (
              <div
                key={banner.alt}
                className="relative min-w-[75%] md:min-w-[50%] lg:min-w-[35%] h-48 md:h-56 lg:h-64 bg-white rounded-2xl overflow-hidden shadow-lg snap-start"
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 500px) 60vw, (max-width: 500px) 40vw, 30vw"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            {t('Logotipai', 'Logos')}
          </h3>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-center">
            {t(
              'Švarūs ir minimalistiniai logotipai skirtingiems prekės ženklams.',
              'Clean and minimal logo set for different brands.'
            )}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="bg-white border border-gray-200 rounded-xl p-6 h-72 flex items-center justify-center shadow-sm"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            {t('Video darbai', 'Video pieces')}
          </h3>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-center">
            {t(
              'Trumpi vaizdo darbai su judesiu ir dinamika.',
              'Short motion pieces with energy and movement.'
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="aspect-video bg-black">
                  <video
                    className="w-full h-full"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



