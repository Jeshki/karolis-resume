'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes'; // <-- 1. PAŠALINTA
import { IconMenu2, IconX } from '@tabler/icons-react'; // Pašalinta IconSun, IconMoon
import { useLanguage } from 'src/contexts/LanguageContext';
import Image from 'next/image';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  // const { theme, setTheme } = useTheme(); // <-- 2. PAŠALINTA
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const flagLT = "https://flagcdn.com/lt.svg";
  const flagGB = "https://flagcdn.com/gb.svg";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200" // Pašalintos dark: klasės
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
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
          <Link href="/" className="hover:text-primary transition">
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

          {isMounted && (
            <>
              <div className="w-px h-6 bg-gray-300" /> {/* Pašalintos dark: klasės */}
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                aria-label="Toggle language"
              >
                <Image
                  src={language === 'lt' ? flagGB : flagLT}
                  alt={t('Pakeisti kalbą', 'Switch language')}
                  width={28}
                  height={20}
                  className="h-5 w-7 rounded-sm"

                />
              </button>

              {/* 3. PAŠALINTAS TEMOS MYGTUKAS */}
              {/* <button ... > ... </button> */}
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" // Pašalintos dark: klasės
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
            className="md:hidden bg-white border-t border-gray-200" // Pašalintos dark: klasės
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{t('Apie mane', 'About')}</Link>
              <Link href="/resume" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{t('Resume', 'Experience')}</Link>
              <Link href="/portfolio" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link href="/kontaktai" className="block py-2 hover:text-primary" onClick={() => setIsOpen(false)}>{t('Kontaktai', 'Contact')}</Link>
            </div>

            {isMounted && (
              <div className="border-t border-gray-200 px-4 py-4 flex justify-between items-center">
                
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm"
                  aria-label="Toggle language"
                >
                  <Image
                    src={language === 'lt' ? flagGB : flagLT}
                    alt={t('Pakeisti kalbą', 'Switch language')}
                    width={24}
                    height={16}
                    className="h-4 w-6 rounded-sm"

                  />
                  {language === 'lt' ? t('Pakeisti į anglų', 'Switch to English') : t('Pakeisti į lietuvių', 'Switch to Lithuanian')}
                </button>
                
                {/* 4. PAŠALINTAS TEMOS MYGTUKAS (MOBILUS) */}
                {/* <button ... > ... </button> */}

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

