'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import Image from 'next/image';

const links = [
  { href: '/', lt: 'Apie mane', en: 'About' },
  { href: '/resume', lt: 'CV', en: 'Resume' },
  { href: '/portfolio', lt: 'Darbai', en: 'Work' },
  { href: '/kontaktai', lt: 'Kontaktai', en: 'Contact' },
] as const;

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const flagLT = 'https://flagcdn.com/lt.svg';
  const flagGB = 'https://flagcdn.com/gb.svg';

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[70] border-b border-gray-200 bg-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center min-h-14">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 transition"
          aria-expanded={isOpen}
          aria-label={isOpen ? t('Uždaryti meniu', 'Close menu') : t('Atidaryti meniu', 'Open menu')}
        >
          {isOpen ? <IconX size={24} strokeWidth={2} /> : <IconMenu2 size={24} strokeWidth={2} />}
        </button>

        <div className="hidden md:flex items-center gap-10 text-lg tracking-wide absolute left-1/2 -translate-x-1/2">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`hover:text-black transition ${
                  active ? 'text-black' : 'text-gray-600'
                }`}
              >
                {t(link.lt, link.en)}
              </Link>
            );
          })}
        </div>

        <button
          onClick={toggleLanguage}
          className="ml-auto flex items-center hover:opacity-80 transition-opacity"
          aria-label={t('Pakeisti kalbą', 'Switch language')}
        >
          <Image
            src={language === 'lt' ? flagGB : flagLT}
            alt={t('Pakeisti kalbą', 'Switch language')}
            width={28}
            height={20}
            className="h-5 w-7 rounded-sm"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-3 pb-5 space-y-1 text-left text-lg tracking-wide">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 hover:text-black ${active ? 'text-black' : 'text-gray-600'}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {t(link.lt, link.en)}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
