'use client';

import { motion } from 'framer-motion';
import { IconExternalLink, IconCode, IconEye } from '@tabler/icons-react';
import Image from 'next/image';
import { useLanguage } from 'src/contexts/LanguageContext';

export function PortfolioSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('Shopify E-komercijos Parduotuvė', 'Shopify E-commerce Store'),
      description: t(
        'Pilnavertė Shopify parduotuvė kosmetikos prekėms su custom tema, mokėjimų integracija ir SEO optimizavimu. Naudotas Liquid, Tailwind CSS ir Figma dizainas.',
        'Full-featured Shopify store for cosmetics with custom theme, payment integration, and SEO optimization. Used Liquid, Tailwind CSS, and Figma design.'
      ),
      image: '/project-shopify.jpg', // Įkelk nuotrauką į public/
      technologies: ['Shopify', 'Liquid', 'Tailwind CSS', 'Figma'],
      liveLink: 'https://example-shopify.com',
      githubLink: 'https://github.com/jogy/shopify-store',
    },
    {
      title: t('UX/UI Dizaino Prototipas', 'UX/UI Design Prototype'),
      description: t(
        'Modernus mobilios app prototipas su interaktyviais elementais, sukurtas Figma ir perkeliamas į React komponentus. Fokusas į vartotojo patirtį ir prieinamumą.',
        'Modern mobile app prototype with interactive elements, built in Figma and ported to React components. Focus on user experience and accessibility.'
      ),
      image: '/project-ui.jpg',
      technologies: ['Figma', 'React', 'TypeScript', 'Framer Motion'],
      liveLink: 'https://example-ui-prototype.com',
      githubLink: 'https://github.com/jogy/ui-prototype',
    },
    {
      title: t('Next.js Personalio Svetainė', 'Next.js Personal Website'),
      description: t(
        'Ši resume svetainė – mano naujausias projektas su Next.js, Tailwind, animacijomis ir EmailJS integracija. Pilnai responsyvi, su tamsia/šviesa tema.',
        'This resume site – my latest project with Next.js, Tailwind, animations, and EmailJS integration. Fully responsive with dark/light theme.'
      ),
      image: '/project-resume.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
      liveLink: 'https://www.jogy.lt', // Tavo sena svetainė
      githubLink: 'https://github.com/jogy/my-resume-site',
    },
    // Pridėk daugiau: pvz., { title: 'Logotipo Dizainas', ... }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white dark:bg-gray-900">
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
          className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
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
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
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
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
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
                    className="flex-1 bg-primary text-white py-2 px-4 rounded text-center hover:bg-blue-700 transition flex items-center justify-center gap-1"
                  >
                    <IconExternalLink size={16} /> {t('Demo', 'Demo')}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="p-2 text-gray-500 hover:text-primary transition"
                  >
                    <IconCode size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}