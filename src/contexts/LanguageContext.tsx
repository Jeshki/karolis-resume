'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'lt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (lt: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('lt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'lt' ? 'en' : 'lt');
  };

  const t = (lt: string, en: string) => language === 'lt' ? lt : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};