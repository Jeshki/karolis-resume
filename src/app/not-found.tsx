'use client';

import Link from 'next/link';
import { useLanguage } from 'src/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-gray-500 mb-2">404</p>
      <h1 className="text-3xl font-bold mb-3">{t('Puslapis nerastas', 'Page not found')}</h1>
      <p className="text-gray-600 mb-6">
        {t(
          'Šio adreso svetainėje nėra. Grįžkite į pradžią arba darbus.',
          'This address is not on the site. Go back home or view the work.'
        )}
      </p>
      <div className="flex gap-3">
        <Link href="/" className="bg-black text-white py-2 px-5 rounded-lg font-medium hover:bg-gray-800">
          {t('Pradžia', 'Home')}
        </Link>
        <Link href="/portfolio" className="border-2 border-black py-2 px-5 rounded-lg font-medium hover:bg-black hover:text-white">
          {t('Darbai', 'Work')}
        </Link>
      </div>
    </div>
  );
}
