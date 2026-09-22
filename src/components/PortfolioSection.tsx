'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from 'src/contexts/LanguageContext';
import { ProjectImageSlider, type ProjectSlide } from 'src/components/ProjectImageSlider';
import { Reveal } from 'src/components/Reveal';
import { projects, todoTasksSlides } from 'src/lib/projects';

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

type Tab = 'web' | 'design' | 'video';

export function PortfolioSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const bannerSliderRef = useRef<HTMLDivElement | null>(null);
  const [tab, setTab] = useState<Tab>('web');
  const [todoPreviewOpen, setTodoPreviewOpen] = useState(false);
  const [todoPreviewIndex, setTodoPreviewIndex] = useState(0);

  useEffect(() => {
    if (!todoPreviewOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTodoPreviewOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [todoPreviewOpen]);

  const scrollBanners = (direction: 'left' | 'right') => {
    const slider = bannerSliderRef.current;
    if (!slider) return;
    const amount = Math.round(slider.clientWidth * 0.85);
    slider.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const slides: ProjectSlide[] = todoTasksSlides.map((slide) => ({
    src: slide.src,
    alt: t(slide.alt.lt, slide.alt.en),
  }));

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

  const tabs: { id: Tab; label: string }[] = [
    { id: 'web', label: 'Web' },
    { id: 'design', label: t('Dizainas', 'Design') },
    { id: 'video', label: 'Video' },
  ];

  const modal =
    todoPreviewOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setTodoPreviewOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="todo-preview-title"
          >
            <div
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              onMouseDown={(event) => event.stopPropagation()}
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
                  slides={slides}
                  className="relative h-[50vh] sm:h-[58vh] md:h-[68vh] min-h-[280px]"
                  imageClassName="object-contain bg-white"
                  sizes="(max-width: 768px) 94vw, 1024px"
                  onIndexChange={setTodoPreviewIndex}
                  persistentArrows
                />
              </div>
              <p className="text-center text-sm text-gray-500 py-3 px-4">
                {slides[todoPreviewIndex]?.alt}
              </p>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <section id="portfolio" className="py-20 pb-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 inline-flex items-center gap-2 justify-center w-full">
            <IconLayoutGrid size={26} className="text-primary" />
            {t('Darbai', 'Work')}
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t(
              'Web projektai pirmiausia. Dizainas ir video — atskiruose skirtukuose, kad neužgožtų svetainių.',
              'Web projects first. Design and video live in their own tabs so they don’t drown the sites.'
            )}
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label={t('Darbų filtrai', 'Work filters')}>
          {tabs.map((item) => {
            const selected = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setTab(item.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selected
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-800 border-gray-300 hover:border-black'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {tab === 'web' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, i) => {
              const mediaClass =
                project.imageFit === 'contain'
                  ? 'object-contain bg-[#111]'
                  : 'object-cover object-top group-hover:scale-105 transition-transform duration-500';
              return (
              <Reveal key={project.slug} delay={Math.min(i * 0.04, 0.24)} className="h-full">
                <motion.article
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col text-left group"
                >
                  <div className={`relative h-48 overflow-hidden shrink-0 ${project.imageFit === 'contain' ? 'bg-[#111]' : ''}`}>
                    {project.gallery ? (
                      <ProjectImageSlider
                        slides={project.gallery.map((slide) => ({
                          src: slide.src,
                          alt: t(slide.alt.lt, slide.alt.en),
                        }))}
                        className="relative h-48"
                        imageClassName={mediaClass}
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={t(project.title.lt, project.title.en)}
                        fill
                        quality={90}
                        className={mediaClass}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h2 className="font-bold text-xl inline-flex items-center gap-2">
                        <IconSparkles size={16} className="text-primary shrink-0" />
                        {t(project.title.lt, project.title.en)}
                      </h2>
                      {project.status ? (
                        <span className="shrink-0 border border-gray-300 px-2 py-0.5 text-[11px] tracking-wide uppercase text-gray-500">
                          {t(project.status.lt, project.status.en)}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-gray-600 mb-4 text-sm flex-1">{t(project.description.lt, project.description.en)}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded inline-flex items-center gap-1"
                        >
                          <IconTag size={12} />
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      {project.opensGalleryModal ? (
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
                          rel="noopener noreferrer"
                          className="flex-1 bg-black text-white py-2 px-4 rounded text-center transition flex items-center justify-center gap-1 hover:bg-gray-800"
                        >
                          <IconExternalLink size={16} />{' '}
                          {project.liveLabel
                            ? t(project.liveLabel.lt, project.liveLabel.en)
                            : t('Demo', 'Demo')}
                        </a>
                      ) : null}
                      {project.caseStudy ? (
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="flex-1 border-2 border-black py-2 px-4 rounded text-center font-medium hover:bg-black hover:text-white transition-colors"
                        >
                          {t('Case study', 'Case study')}
                        </Link>
                      ) : null}
                      {project.githubLink ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-500 hover:text-primary transition"
                          aria-label="GitHub"
                        >
                          <IconCode size={20} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
            })}
          </div>
        ) : null}

        {tab === 'design' ? (
          <div className="text-left space-y-20">
            <div>
              <div className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold inline-flex items-center gap-2">
                    <IconPhoto size={22} className="text-primary" />
                    {t('Baneriai', 'Banners')}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {t('Reklaminiai baneriai ir posteriai vienoje vietoje.', 'Promo banners and posters in one place.')}
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
                        sizes="(max-width: 768px) 75vw, 35vw"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center inline-flex items-center gap-2 justify-center w-full">
                <IconPalette size={22} className="text-primary" />
                {t('Logotipai', 'Logos')}
              </h2>
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
                      <Image src={logo.image} alt={logo.name} fill quality={100} className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {tab === 'video' ? (
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center inline-flex items-center gap-2 justify-center w-full">
              <IconVideo size={22} className="text-primary" />
              {t('Video darbai', 'Video pieces')}
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-center">
              {t('Trumpi vaizdo darbai su judesiu ir dinamika.', 'Short motion pieces with energy and movement.')}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div
                  key={video.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                >
                  <div className="aspect-video bg-black">
                    <video className="w-full h-full" controls preload="metadata">
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {modal}
      </div>
    </section>
  );
}
