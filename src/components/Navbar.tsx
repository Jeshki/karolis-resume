'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconMenu2, IconX, IconSun, IconMoon, IconLanguage } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Karolis Čibiras
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/apie" className="hover:text-primary transition">
            {t('Apie mane', 'About')}
          </Link>
          <Link href="/resume" className="hover:text-primary transition">
            {t('Resume', 'Experience')}
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition">
            Portfolio
          </Link>
          <Link href="/kontaktai" className="hover:text-primary transition">
            {t('Kontaktai', 'Contact')}
          </Link>

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700" />

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:text-primary transition"
            aria-label="Toggle language"
          >
            <IconLanguage size={20} />
            <span className="text-sm font-medium">{language === 'lt' ? 'EN' : 'LT'}</span>
          </button>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hover:text-primary transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {isOpen ? (
            <IconX size={24} strokeWidth={2} />
          ) : (
            <IconMenu2 size={24} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/apie" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{t('Apie mane', 'About')}</Link>
              <Link href="/resume" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{t('Resume', 'ResumeExperience')}</Link>
              <Link href="/portfolio" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link href="/kontaktai" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{t('Kontaktai', 'Contact')}</Link>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-4 flex justify-between items-center">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-sm"
                aria-label="Toggle language"
              >
                <IconLanguage size={20} />
                {t('Pakeisti į anglų', 'Switch to Lithuanian')}
              </button>
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-sm"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
                {t('Tamsus režimas', 'Light mode')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}