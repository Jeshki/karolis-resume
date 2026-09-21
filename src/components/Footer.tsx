'use client';

import Link from 'next/link';
import { IconCopyright, IconMail, IconPhone } from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';
import { SITE } from 'src/lib/site';

export function Footer() {
  const { t } = useLanguage();
  const year = 2026;

  const links = [
    { href: '/portfolio', lt: 'Darbai', en: 'Work' },
    { href: '/resume', lt: 'CV', en: 'Resume' },
    { href: '/kontaktai', lt: 'Kontaktai', en: 'Contact' },
    { href: '/privatumas', lt: 'Privatumas', en: 'Privacy' },
    { href: SITE.linkedin, lt: 'LinkedIn', en: 'LinkedIn', external: true },
  ];

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <nav aria-label={t('Poraštė', 'Footer')} className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                {t(link.lt, link.en)}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="hover:underline underline-offset-4">
                {t(link.lt, link.en)}
              </Link>
            )
          )}
        </nav>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-white/85">
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center gap-2 hover:underline underline-offset-4">
            <IconMail size={16} />
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 hover:underline underline-offset-4">
            <IconPhone size={16} />
            {SITE.phoneDisplay}
          </a>
        </div>
        <p className="inline-flex items-center gap-2 justify-center text-sm text-white/80">
          <IconCopyright size={16} />
          {year} {SITE.name}. {t('Visos teisės saugomos.', 'All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
