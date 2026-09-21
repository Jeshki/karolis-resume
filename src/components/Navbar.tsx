'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX, IconUser, IconBriefcase, IconLayoutGrid, IconMail } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import Image from 'next/image';

const links = [
  { href: '/', icon: IconUser, lt: 'Apie mane', en: 'About' },
  { href: '/resume', icon: IconBriefcase, lt: 'CV', en: 'Resume' },
  { href: '/portfolio', icon: IconLayoutGrid, lt: 'Darbai', en: 'Work' },
  { href: '/kontaktai', icon: IconMail, lt: 'Kontaktai', en: 'Contact' },
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
      className="fixed top-0 w-full z-[70] border-b border-gray-200 bg-white backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.svg"
            alt={t('Karolio Čibiro logotipas', 'Karolis Čibiras Logo')}
            width={150}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`hover:text-primary transition flex items-center gap-2 ${
                  active ? 'font-semibold text-black' : 'text-gray-700'
                }`}
              >
                <Icon size={16} className="text-primary" />
                {t(link.lt, link.en)}
              </Link>
            );
          })}

          <div className="w-px h-6 bg-gray-300" />

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-expanded={isOpen}
          aria-label={isOpen ? t('Uždaryti meniu', 'Close menu') : t('Atidaryti meniu', 'Open menu')}
        >
          {isOpen ? <IconX size={24} strokeWidth={2} /> : <IconMenu2 size={24} strokeWidth={2} />}
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
            <div className="px-4 pt-2 pb-4 space-y-2">
              {links.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 hover:text-primary ${active ? 'font-semibold' : ''}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} className="text-primary" />
                      {t(link.lt, link.en)}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-gray-200 px-4 py-4 flex justify-between items-center">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-sm"
                aria-label={t('Pakeisti kalbą', 'Switch language')}
              >
                <Image
                  src={language === 'lt' ? flagGB : flagLT}
                  alt={t('Pakeisti kalbą', 'Switch language')}
                  width={24}
                  height={16}
                  className="h-4 w-6 rounded-sm"
                />
                {language === 'lt'
                  ? t('Pakeisti į anglų', 'Switch to English')
                  : t('Pakeisti į lietuvių', 'Switch to Lithuanian')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
