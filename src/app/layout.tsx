'use client';

import { motion, AnimatePresence } from 'framer-motion';
// import { ThemeProvider } from 'next-themes'; // <-- 1. PAŠALINTA
import { Montserrat } from 'next/font/google'; 
import { usePathname } from 'next/navigation';
import { LanguageProvider } from 'src/contexts/LanguageContext';
import { Navbar } from 'src/components/Navbar';
import { ScrollProgressBar } from 'src/components/ScrollProgressBar';
import { Footer } from 'src/components/Footer';
import { FloatingContact } from 'src/components/FloatingContact';
import './globals.css';
import './print.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="lt" suppressHydrationWarning>
      {/* 2. PATAISYTA: Pašalintos 'dark:' klasės */}
      <body className={`${montserrat.variable} font-sans bg-white text-gray-900 transition-colors`}>
        {/* 3. PAŠALINTAS ThemeProvider apgaubimas */}
        <LanguageProvider>
          <Navbar />
          <ScrollProgressBar />
          <AnimatePresence mode="popLayout">
            <motion.main
              key={pathname}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="min-h-screen"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}