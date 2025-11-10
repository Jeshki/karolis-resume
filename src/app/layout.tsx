'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { LanguageProvider } from 'src/contexts/LanguageContext';
import { Navbar } from 'src/components/Navbar';
import { ScrollProgressBar } from 'src/components/ScrollProgressBar';
import { Footer } from 'src/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="lt" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <Navbar />
            <ScrollProgressBar />
            <AnimatePresence mode="wait">
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
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}