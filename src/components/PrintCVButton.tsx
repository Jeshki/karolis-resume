'use client';

import { IconFileDownload } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

export function PrintCVButton() {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-6 right-6 bg-primary hover:bg-blue-700 text-white p-4 rounded-full shadow-xl z-50 flex items-center gap-2 print:hidden"
    >
      <IconFileDownload size={24} />
      <span className="hidden sm:inline">{t('Atsisiųsti PDF', 'Download PDF')}</span>
    </button>
  );
}