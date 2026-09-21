'use client';

import Link from 'next/link';
import { useLanguage } from 'src/contexts/LanguageContext';
import { SITE } from 'src/lib/site';

export function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <article className="py-24 px-4">
      <div className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('Privatumo politika', 'Privacy policy')}</h1>
        <p className="text-sm text-gray-500 mb-8">{t('Atnaujinta 2026-09-21', 'Updated 2026-09-21')}</p>

        <p className="text-gray-700 mb-6">
          {t(
            'Ši politika paaiškina, kaip Karolis Čibiras (individuali veikla, Kaunas) tvarko asmens duomenis, kuriuos paliekate šioje svetainėje — visų pirma kontaktinėje formoje.',
            'This policy explains how Karolis Čibiras (sole trader, Kaunas) handles personal data you leave on this site — primarily via the contact form.'
          )}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">{t('Valdytojas', 'Controller')}</h2>
        <p className="text-gray-700 mb-4">
          {SITE.name}
          <br />
          {t('El. paštas', 'Email')}: {SITE.email}
          <br />
          {t('Telefonas', 'Phone')}: {SITE.phoneDisplay}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">{t('Kokius duomenis renku', 'What data I collect')}</h2>
        <p className="text-gray-700 mb-4">
          {t(
            'Kontaktinė forma: vardas, el. pašto adresas, žinutės turinys ir sutikimo žyma. Jei rašote ar skambinate tiesiogiai — tuos kontaktus, kuriuos patys pateikiate.',
            'Contact form: name, email address, message body, and the consent checkbox. If you email or call directly — the contact details you choose to share.'
          )}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">{t('Tikslas ir teisinis pagrindas', 'Purpose and legal basis')}</h2>
        <p className="text-gray-700 mb-4">
          {t(
            'Duomenys naudojami tik atsakymui į užklausą ir, jei sutariame, projekto vykdymui. Pagrindas — jūsų sutikimas (forma) ir/ar teisėtas interesas atsakyti į verslo užklausą (BDAR 6 str. 1 d. a ir f punktai).',
            'Data is used only to reply to your enquiry and, if we agree, to run the project. Legal basis: your consent (the form) and/or legitimate interest in answering a business enquiry (GDPR Art. 6(1)(a) and (f)).'
          )}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">{t('Saugojimas ir trečiosios šalys', 'Retention and processors')}</h2>
        <p className="text-gray-700 mb-4">
          {t(
            'Formos laiškai siunčiami per EmailJS ir pasiekia mano el. paštą. Saugau susirašinėjimą tiek, kiek reikia atsakymui ir sutarčiai (paprastai iki 12 mėn., nebent buhalterija ar teisė reikalauja ilgiau). Neperduodu duomenų rinkodarai.',
            'Form messages are sent via EmailJS to my inbox. I keep correspondence as long as needed to reply and fulfil an agreement (typically up to 12 months, unless accounting or law requires longer). I do not sell data for marketing.'
          )}
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">{t('Jūsų teisės', 'Your rights')}</h2>
        <p className="text-gray-700 mb-4">
          {t(
            'Galite prašyti susipažinti su duomenimis, juos ištaisyti, ištrinti, apriboti tvarkymą arba atšaukti sutikimą. Rašykite ',
            'You may request access, rectification, erasure, restriction, or withdraw consent. Write to '
          )}
          <a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          {t(
            '. Taip pat galite kreiptis į Valstybinę duomenų apsaugos inspekciją (vdai.lrv.lt).',
            '. You may also contact your local data protection authority.'
          )}
        </p>

        <p className="mt-10">
          <Link href="/kontaktai" className="underline underline-offset-4">
            {t('Grįžti į kontaktus', 'Back to contact')}
          </Link>
        </p>
      </div>
    </article>
  );
}
