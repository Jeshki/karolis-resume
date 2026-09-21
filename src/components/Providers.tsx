'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Footer } from 'src/components/Footer';
import { FloatingContact } from 'src/components/FloatingContact';
import { Navbar } from 'src/components/Navbar';
import { ScrollProgressBar } from 'src/components/ScrollProgressBar';
import { LanguageProvider, useLanguage } from 'src/contexts/LanguageContext';
import { useEffect } from 'react';

function HtmlLang() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}

function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <>
      <HtmlLang />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        {t('Eiti prie turinio', 'Skip to content')}
      </a>
      <Navbar />
      <ScrollProgressBar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
          className="relative z-0 min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingContact />
    </>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AppShell>{children}</AppShell>
    </LanguageProvider>
  );
}
