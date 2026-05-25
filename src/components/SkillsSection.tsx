'use client';

import { motion } from 'framer-motion';
import { IconTools } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  const tools = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/wordpress.svg' },
    { name: 'WooCommerce', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/woocommerce.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/php.svg' },
    { name: 'Elementor', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/elementor.svg' },
    { name: 'Shopify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/shopify.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/figma.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/docker.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/vercel.svg' },
    { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/netlify.svg' },
    { name: 'ChatGPT / GPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/openai.svg' },
    { name: 'Claude', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/anthropic.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/mysql.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/prisma.svg' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full"
        >
          <IconTools size={26} className="text-primary" />
          {t('Technologijos ir įrankiai', 'Technologies & Tools')}
        </motion.h2>

        <div className="mb-8 flex items-center justify-center gap-2 text-primary">
          <IconTools size={22} />
          <span className="font-semibold">{t('Pilnas tech stack', 'Full tech stack')}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 flex items-center justify-center gap-3"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-5 w-5 brightness-0 opacity-80"
                loading="lazy"
              />
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
