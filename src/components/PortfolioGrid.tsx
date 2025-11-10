'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-komercijos parduotuvė',
    description: 'Pilnai responsyvi Shopify parduotuvė su custom tema ir mokėjimais.',
    tags: ['Shopify', 'Liquid', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Svetainės dizainas',
    description: 'Moderni, greita ir SEO draugiška Next.js svetainė.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Logotipo kūrimas',
    description: 'Minimalistinis logotipas startuoliui – vektorinis, universalus.',
    tags: ['Figma', 'Illustrator', 'Branding'],
    link: '#',
  },
];

export function PortfolioGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {projects.map((project, i) => (
        <motion.a
          key={i}
          href={project.link}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -10 }}
          className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
        >
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm border-2 border-dashed border-white/40 rounded-xl w-24 h-24" />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}