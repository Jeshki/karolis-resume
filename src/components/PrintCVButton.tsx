'use client';

import { IconFileDownload } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

export function PrintCVButton() {
  const { t } = useLanguage();

  const handlePrint = () => {
    // PATAISYMAS: Atidarome statinį HTML failą, esantį public kataloge
    window.open('/resume.html', '_blank');
  };

  return (
    <button
      onClick={handlePrint}
      // PATAISYMAS: Atnaujintas stilius, kad atitiktų primary spalvą ir tamsų režimą
      // Pakeistas tekstas ir aria-label
      className="fixed bottom-6 left-6 bg-primary hover:bg-blue-700 text-white p-4 rounded-full shadow-xl z-50 flex items-center gap-2 print:hidden transition-colors"
      aria-label={t('Peržiūrėti CV spausdinimui', 'Preview CV for Printing')}
    >
      <IconFileDownload size={24} />
      <span className="hidden sm:inline pr-2">{t('Spausdinti CV', 'Print CV')}</span>
    </button>
  );
}