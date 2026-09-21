'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMessage, IconBrandWhatsapp, IconPhone, IconMail, IconX } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { SITE } from 'src/lib/site';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { href: SITE.whatsapp, icon: <IconBrandWhatsapp size={24} />, label: 'WhatsApp' },
    { href: SITE.phoneHref, icon: <IconPhone size={24} />, label: t('Skambinti', 'Call') },
    { href: `mailto:${SITE.email}`, icon: <IconMail size={24} />, label: t('El. paštas', 'Email') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div className="flex flex-col items-center gap-3">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.05 } }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 transition-transform border border-gray-200"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isOpen}
        aria-label={isOpen ? t('Uždaryti kontaktus', 'Close contact menu') : t('Susisiekti', 'Get in touch')}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <IconX size={28} /> : <IconMessage size={28} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
