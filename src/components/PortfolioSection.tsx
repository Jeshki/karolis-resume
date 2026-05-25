'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconChevronLeft,
  IconChevronRight,
  IconCode,
  IconExternalLink,
  IconEye,
  IconLayoutGrid,
  IconPhoto,
  IconPalette,
  IconVideo,
  IconSparkles,
  IconTag,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from 'src/contexts/LanguageContext';
import { ProjectImageSlider, type ProjectSlide } from 'src/components/ProjectImageSlider';

import banner1 from 'src/designs/baners/baner1.webp';
import banner2 from 'src/designs/baners/baner2.webp';
import banner3 from 'src/designs/baners/baner3.webp';
import banner4 from 'src/designs/baners/baner4.webp';
import bannerBellShirts from 'src/designs/baners/bell-shirts.webp';
import bannerBlackFriday from 'src/designs/baners/black friday.webp';
import bannerBlackFriday2 from 'src/designs/baners/black-friday-2.webp';
import bannerLavincius5 from 'src/designs/baners/lavincius-5.webp';
import bannerNuolaida4 from 'src/designs/baners/nuolaida-4.webp';
import bannerSmacio from 'src/designs/baners/smacio.webp';
import bannerVaikaiPng from 'src/designs/baners/vaikai.webp';

import logoEra from 'src/designs/logo/era.jpeg';
import logoBell from 'src/designs/logo/bell.png';
import logoDusofi from 'src/designs/logo/dusofi.png';
import logoJmDekoras from 'src/designs/logo/jmdekoras.svg';
import logoLavincius from 'src/designs/logo/lavincius.png';
import logoNefbook from 'src/designs/logo/nefbook.svg';


export function PortfolioSection() {
  const { t } = useLanguage();
  const bannerSliderRef = useRef<HTMLDivElement | null>(null);
  const [todoPreviewOpen, setTodoPreviewOpen] = useState(false);
  const [todoPreviewIndex, setTodoPreviewIndex] = useState(0);

  useEffect(() => {
    if (!todoPreviewOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTodoPreviewOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [todoPreviewOpen]);

  const scrollBanners = (direction: 'left' | 'right') => {
    const slider = bannerSliderRef.current;
    if (!slider) return;
    const amount = Math.round(slider.clientWidth * 0.85);
    slider.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const todoTasksSlideSources = [
    {
      src: '/portfolio/todo-tasks/01-prisijungimas.png',
      altLt: 'Prisijungimo langas',
      altEn: 'Sign-in screen',
    },
    {
      src: '/portfolio/todo-tasks/02-uzduociu-lenta.png',
      altLt: 'Užduočių lenta su stulpeliais',
      altEn: 'Task board with columns',
    },
    {
      src: '/portfolio/todo-tasks/03-uzduoties-langas.png',
      altLt: 'Užduoties langas su nuotraukomis ir komentarais',
      altEn: 'Task detail with photos and comments',
    },
    {
      src: '/portfolio/todo-tasks/04-administravimas.png',
      altLt: 'Administratoriaus skydelis',
      altEn: 'Admin dashboard',
    },
    {
      src: '/portfolio/todo-tasks/05-eksportas-excel.png',
      altLt: 'Eksportas į Excel',
      altEn: 'Export to Excel',
    },
  ];

  const todoTasksSlides: ProjectSlide[] = todoTasksSlideSources.map((slide) => ({
    src: slide.src,
    alt: t(slide.altLt, slide.altEn),
  }));

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
      title: t('JMD Chirurgijos Studija', 'JMD Surgery Studio'),
      description: t(
        'Burnos, veido ir žandikaulių chirurgijos klinikos svetainė su paslaugomis, specialistais, kainynu ir registracija.',
        'A clinic website for oral and maxillofacial surgery, featuring services, specialists, pricing, and appointment registration.'
      ),
      image: '/praktinechirurgija.png',
      technologies: ['WordPress'],
      liveLink: 'https://praktinechirurgija.lt',
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
      title: t('Čiužinių Sala', 'Mattress Island'),
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
    {
      title: t('Chomicius CV', 'Chomicius CV'),
      description: t(
        'Odontologo Deivido Chomiciaus profesinė CV svetainė su paslaugų pristatymu ir kontaktine informacija.',
        "A professional CV website for dentist Deividas Chomicius, showcasing services and contact information."
      ),
      image: '/chomicius.png',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      liveLink: 'https://chomiciuscv.vercel.app',
      githubLink: 'https://github.com/Jeshki/ChomiciusCV',
    },
    {
      title: t('Užduočių lenta', 'To-Do Tasks'),
      description: t(
        'Užduočių valdymo aplikacija su prisijungimu, užduočių kūrimu ir būsenų sekimu. Sukurta su Next.js ir Prisma.',
        'A task management app with authentication, task creation, and status tracking. Built with Next.js and Prisma.'
      ),
      image: '/portfolio/todo-tasks/02-uzduociu-lenta.png',
      gallery: todoTasksSlides,
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
      githubLink: 'https://github.com/Jeshki/to-do-tasks',
      opensGalleryModal: true,
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
    { src: '/designs/posteriai/rectangle-1.webp', alt: t('Posteris 1', 'Poster 1') },
    { src: '/designs/posteriai/rectangle-5.webp', alt: t('Posteris 2', 'Poster 2') },
    { src: '/designs/posteriai/rectangle-9.webp', alt: t('Posteris 3', 'Poster 3') },
    { src: '/designs/posteriai/rectangle-10.webp', alt: t('Posteris 4', 'Poster 4') },
    { src: '/designs/posteriai/rectangle-11.webp', alt: t('Posteris 5', 'Poster 5') },
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
    { src: '/designs/video/duona-1.mp4', title: t('Duona', 'Duona') },
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
          className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2 justify-center w-full"
        >
          <IconLayoutGrid size={26} className="text-primary" />
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
                {'gallery' in project && project.gallery ? (
                  <ProjectImageSlider
                    slides={project.gallery}
                    className="relative h-48"
                    imageClassName="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <IconEye size={32} className="text-white" />
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-2 inline-flex items-center gap-2">
                  <IconSparkles size={16} className="text-primary" />
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded inline-flex items-center gap-1">
                      <IconTag size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {'opensGalleryModal' in project && project.opensGalleryModal ? (
                    <button
                      type="button"
                      onClick={() => {
                        setTodoPreviewIndex(0);
                        setTodoPreviewOpen(true);
                      }}
                      className="flex-1 bg-black text-white py-2 px-4 rounded text-center transition flex items-center justify-center gap-1 hover:bg-gray-800"
                    >
                      <IconEye size={16} /> {t('Demo', 'Demo')}
                    </button>
                  ) : project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-black text-white py-2 px-4 rounded text-center transition flex items-center justify-center gap-1"
                    >
                      <IconExternalLink size={16} /> {t('Demo', 'Demo')}
                    </a>
                  ) : null}
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-gray-500 hover:text-primary transition"
                      aria-label="GitHub"
                    >
                      <IconCode size={20} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {todoPreviewOpen ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setTodoPreviewOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="todo-preview-title"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setTodoPreviewOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
                aria-label={t('Uždaryti', 'Close')}
              >
                <IconX size={20} />
              </button>
              <div className="p-4 pb-3 text-left border-b border-gray-100">
                <h3 id="todo-preview-title" className="text-lg md:text-xl font-bold pr-10">
                  {t('Užduočių lenta – sistemos peržiūra', 'To-Do Tasks – system preview')}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {t(
                    'Kadangi gyvas demo reikalauja prisijungimo, parodome pagrindinius sistemos ekranus: lentą, užduoties langą, administravimą ir Excel eksportą.',
                    'Because the live demo requires sign-in, here are the main screens: board, task detail, admin panel, and Excel export.'
                  )}
                </p>
              </div>
              <div className="bg-gray-50">
                <ProjectImageSlider
                  slides={todoTasksSlides}
                  className="relative h-48 sm:h-56 md:h-64"
                  imageClassName="object-contain bg-white"
                  sizes="(max-width: 768px) 90vw, 672px"
                  onIndexChange={setTodoPreviewIndex}
                  persistentArrows
                />
              </div>
              <p className="text-center text-sm text-gray-500 py-3 px-4">
                {todoTasksSlides[todoPreviewIndex]?.alt}
              </p>
            </div>
          </div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mt-20"
        >
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold inline-flex items-center gap-2">
                <IconPhoto size={22} className="text-primary" />
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
            {bannerSlides.map((banner) => {
              const isPoster = typeof banner.src === 'string';
              return (
                <div
                  key={banner.alt}
                  className="relative min-w-[75%] md:min-w-[50%] lg:min-w-[35%] h-48 md:h-56 lg:h-64 bg-white rounded-2xl overflow-hidden shadow-lg snap-start"
                >
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    quality={100}
                    className={isPoster ? 'object-contain bg-gray-50' : 'object-cover'}
                    sizes="(max-width: 500px) 60vw, (max-width: 500px) 40vw, 30vw"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center inline-flex items-center gap-2 justify-center w-full">
            <IconPalette size={22} className="text-primary" />
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
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center inline-flex items-center gap-2 justify-center w-full">
            <IconVideo size={22} className="text-primary" />
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



