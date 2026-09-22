'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { Reveal } from 'src/components/Reveal';

export function SkillsSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const tools: { name: string; icon?: string }[] = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg' },
    { name: 'Expo', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/expo.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg' },
    { name: 'Expo Router', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/expo.svg' },
    { name: 'TanStack Query', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/tanstack.svg' },
    { name: 'React Hook Form', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/reacthookform.svg' },
    { name: 'Zod', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/zod.svg' },
    { name: 'Zustand' },
    { name: 'EAS' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg' },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/framer.svg' },
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
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/firebase.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/supabase.svg' },
    { name: 'Neon', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/neon.svg' },
    { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/stripe.svg' },
    { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/graphql.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 inline-flex items-center gap-2 justify-center w-full">
            <Wrench size={22} strokeWidth={1.5} />
            {t('Technologijos ir įrankiai', 'Technologies & Tools')}
          </h2>
        </Reveal>

        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="font-semibold">{t('Pilnas tech stack', 'Full tech stack')}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              className="bg-white border border-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 flex items-center justify-center gap-3"
            >
              {tool.icon ? (
                <img
                  src={tool.icon}
                  alt=""
                  className="h-5 w-5 brightness-0 opacity-80"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
