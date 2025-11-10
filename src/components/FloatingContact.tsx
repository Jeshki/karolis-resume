'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMessage, IconBrandWhatsapp, IconPhone, IconMail, IconX } from '@tabler/icons-react';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Kontaktų nuorodos
  const links = [
    { 
      href: 'https://wa.me/37060302903', // Jūsų WhatsApp numeris
      icon: <IconBrandWhatsapp size={24} />, 
      label: 'WhatsApp' 
    },
    { 
      href: 'tel:+37060302903', // Jūsų telefono numeris
      icon: <IconPhone size={24} />, 
      label: 'Skambinti' 
    },
    { 
      href: 'mailto:karoliscibiras@gmail.com', // Jūsų el. paštas
      icon: <IconMail size={24} />, 
      label: 'El. paštas' 
    },
  ];

  return (
    // Konteineris, kuris fiksuoja mygtuką apačioje dešinėje
    // 'print:hidden' paslėps jį spausdinant CV
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 print:hidden">
      
      {/* Animuotos sub-nuorodos */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center gap-3"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.05 } }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagrindinis mygtukas, kuris atidaro/uždaro meniu */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-balck p-4 rounded-full shadow-xl hover:orange transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isOpen}
        aria-label="Toggle contact menu"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {/* Rodo X ikoną kai atidaryta, ir žinutės ikoną kai uždaryta */}
            {isOpen ? <IconX size={28} /> : <IconMessage size={28} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}