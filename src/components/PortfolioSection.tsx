'use client';

import { motion } from 'framer-motion';
import { IconExternalLink, IconCode, IconEye } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from 'src/contexts/LanguageContext';

export function PortfolioSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('Dusofi svetainė', 'Dusofi website'),
      description: t(
        'Ši svetainė sukurta siekiant pasidalinti nesenstančia išmintimi – žodžiais',
        'This website was created from a desire to share timeless wisdom — words that inspire, encourage reflection, and offer new perspectives.'
      ),
      image: '/dusofi.png',
      // ČIA BUVO KLAIDA: trūko `technologies` masyvo
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'], // <-- PRIDĖKITE TINKAMAS
      liveLink: 'https://www.dusofi.lt',
      githubLink: 'https://github.com/Jeshki/dusofi-full',
    },
{
      title: t('JM Dekoras', 'JM Dekoras'),
      description: t(
        'Svetainė, skirta švenčių planavimui, dekoravimui ir unikalioms žvakėms.',
        'A website for event planning, decoration, and unique candles.'
      ),
      image: '/jmdekoras.png', // <-- SVARBU: Įkelkite šį failą į public/jm-dekoras.jpg
      technologies: ['Shopify'], // Atspėjau technologijas pagal jūsų įgūdžius
      liveLink: 'https://www.jmdekoras.lt',
    },

    {
      title: t('BSO Svetainė', 'BSO Website'),
      description: t(
        'Verslo svetainė (webdemo), sukurta naudojant WordPress ir Elementor.',
        'Business website (webdemo), built with WordPress and Elementor.'
      ),
      image: '/bso.png', // <-- SVARBU: Įkelkite šį failą į public/bso-svetaine.jpg
      technologies: ['WordPress', 'Elementor', 'PHP'], // Atspėjau technologijas
      liveLink: 'https://bso.webdemo.lt',
    },

   {
      title: t('Papildų Sala', 'Supplement Island'),
      description: t(
        'Elektroninė parduotuvė, prekiaujanti maisto papildais. Sukurta su WordPress ir WooCommerce.',
        'An e-commerce store selling food supplements. Built with WordPress and WooCommerce.'
      ),
      image: '/papildusala.png', // <-- SVARBU: Įkelkite šį failą į public/papildu-sala.jpg
      technologies: ['WordPress', 'WooCommerce', 'PHP'], // Atspėjau technologijas
      liveLink: 'https://papildusala.lt/',
    },

    
      {
      title: t('Čiužinių Sala', 'Mattress Island'),
      description: t(
        'Elektroninė parduotuvė, prekiaujanti čiužiniais ir lovomis. Sukurta su WordPress ir WooCommerce.',
        'An e-commerce store selling mattresses and beds. Built with WordPress and WooCommerce.'
      ),
      image: '/ciuziniusala.png', // <-- SVARBU: Įkelkite šį failą į public/ciuziniu-sala.jpg
      technologies: ['WordPress', 'WooCommerce', 'PHP'], // Atspėjau technologijas
      liveLink: 'https://ciuziniusala.lt/',
    },

     {
      title: t('Doviles Resume', 'Doviles Resume'),
      description: t(
        'Moderni ir interaktyvi CV svetainė, skirta pristatyti Dovilės profesinę patirtį.',
        'A modern and interactive resume website built to showcase Dovilės professional experience.',
      ),
      image: '/doviles.png', 
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'], // Atspėjau technologijas
      liveLink: 'https://doviles-resume.vercel.app//',
    },
  ];

  const designPieces = [
    {
      title: t('Vasaros renginių plakatas', 'Summer events poster'),
      description: t(
        'Spalvingas renginių plakatas, sukurtas išryškinti vasaros atmosferą ir pritraukti miesto gyventojus.',
        'A vibrant event poster crafted to highlight the summer mood and attract city crowds.'
      ),
      image: '/posters-summer.svg',
      technologies: ['Poster design', 'Gradient art'],
      liveLink: '/posters-summer.svg',
    },
    {
      title: t('Tech konferencijos plakatas', 'Tech conference poster'),
      description: t(
        'Minimalistinis, technologijomis įkvėptas plakatas konferencijai apie dirbtinį intelektą.',
        'A minimalist, tech-inspired poster for an artificial intelligence conference.'
      ),
      image: '/posters-tech.svg',
      technologies: ['Poster design', 'Futuristic UI'],
      liveLink: '/posters-tech.svg',
    },
    {
      title: t('Minimalus monogramos logotipas', 'Minimal monogram logo'),
      description: t(
        'Švarus monogramos ženklas studijai, kurio konstrukcijoje susilieja geometrija ir spalvų kontrastai.',
        'A clean monogram mark for a studio that blends geometry with bold color contrast.'
      ),
      image: '/logo-monogram.svg',
      technologies: ['Logo design', 'Branding'],
      liveLink: '/logo-monogram.svg',
    },
    {
      title: t('Kavos studijos ženklas', 'Coffee studio mark'),
      description: t(
        'Šiltas, rankų darbo logotipas kavos studijai, primenantis kavos puodelio garus.',
        'A warm, handcrafted logo for a coffee studio that echoes the steam from a cup.'
      ),
      image: '/logo-coffee.svg',
      technologies: ['Logo design', 'Illustration'],
      liveLink: '/logo-coffee.svg',
    },
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
            'Mano naujausi projektai – nuo e-komercijos iki UX/UI prototipų.',
            'My latest projects – from e-commerce to UX/UI prototypes.'
          )}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
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
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <IconEye size={32} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Ši vieta nebeveiks, jei `technologies` neegzistuos */}
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
                    className="flex-1 bg-black text-white py-2 px-4 rounded text-center transition flex items-center justify-center gap-1"
                  >
                    <IconExternalLink size={16} /> {t('Demo', 'Demo')}
                  </a>
                  {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
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
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center">
            {t('Posteriai ir logotipai', 'Posters and logos')}
          </h3>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-center">
            {t(
              'Kūrybiniai spaudos ir vizualinės tapatybės darbai, kurie padeda išryškinti prekės ženklo charakterį.',
              'Creative print and visual identity pieces that help bring a brand’s personality to life.'
            )}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPieces.map((piece, i) => (
              <motion.div
                key={piece.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <IconEye size={28} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{piece.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm">{piece.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {piece.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={piece.liveLink}
                      target="_blank"
                      className="flex-1 bg-black text-white py-2 px-4 rounded text-center transition flex items-center justify-center gap-1"
                    >
                      <IconExternalLink size={16} /> {t('Peržiūrėti', 'View')}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}