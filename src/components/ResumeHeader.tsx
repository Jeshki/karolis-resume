'use client';

import { useLanguage } from 'src/contexts/LanguageContext';
import { IconPhone, IconMail, IconMapPin, IconCode, IconDeviceDesktop, IconUsers, IconBrain, IconFileDownload, IconPrinter } from '@tabler/icons-react';
import Image from 'next/image';

export function ResumeHeader() {
  const { t } = useLanguage();

  const strengths = [
    { name: t('Front-End programavimas', 'Front-End Programming'), icon: <IconCode size={18} /> },
    { name: t('UX/UI Dizaino supratimas', 'UX/UI Design Understanding'), icon: <IconDeviceDesktop size={18} /> },
    { name: t('Verslo procesų patirtis', 'Business Process Experience'), icon: <IconBrain size={18} /> },
    { name: t('Nuolatinis mokymasis ir tobulėjimas', 'Continuous Learning and Improvement'), icon: <IconUsers size={18} /> },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Antraštė ir Kontaktai */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <Image
              src="/karolis-2.jpg" // Įsitikinkite, kad 'public/karolis-2.jpg' egzistuoja
              alt="Karolis Čibiras"
              width={120} 
              height={120}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Karolis Čibiras
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
            {t('Front-End Developer - UX/UI Dizaineris', 'Front-End Developer & UX/UI Designer')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 text-gray-600">
            <span className="flex items-center gap-2 justify-center">
              <IconMail size={18} /> karoliscibiras@gmail.com
            </span>
            <span className="flex items-center gap-2 justify-center">
              <IconPhone size={18} /> +370 603 02903
            </span>
            <span className="flex items-center gap-2 justify-center">
              <IconMapPin size={18} /> Kaunas
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
           <a 
             href="/Karolis-Cibiras-CV.pdf"  
             download 
             className="bg-black text-white py-2 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
           >
             <IconFileDownload size={18} /> {t('Atsisiųsti CV (LT)', 'Download CV (LT)')}
           </a>
           <a 
             href="/Karolis-Cibiras-CV-EN.pdf" 
             download
             className="bg-black text-white py-2 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
           >
             <IconFileDownload size={18} /> {t('Atsisiųsti CV (EN)', 'Download CV (EN)')}
           </a>
         </div>
        </div>

        {/* Apie mane ir Stiprybės */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Apie mane tekstas */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('Apie mane', 'About Me')}</h3>
            <p className="text-lg text-gray-700">
              {t(
                'Esu patyręs Web Develop-eris, besispecializuojantis Front-End programavime ir UX/UI dizaine. Su 15 metų patirtimi šeimos versle, esu išsiugdęs stiprias verslumo ir problemų sprendimo savybes. Įgijau žinių ISM, baigiau Front-End studijas Bit Akademijoje, o šiuo metu tęsiu mokslus www.codecademy.com. Esu laisvai bendraujantis, pozityvus ir ryžtingas "kovotojas", nuolat siekiantis tobulumo ir inovacijų.',
                "I am an experienced Web Developer specializing in Front-End programming and UX/UI design. With 15 years of experience in a family business, I have developed strong entrepreneurial and problem-solving skills. I gained knowledge at ISM, completed Front-End studies at Bit Academy, and am currently continuing my studies at www.codecademy.com. I am easy-going, positive, and a determined 'fighter', constantly striving for perfection and innovation."
              )}
            </p>
          </div>

          {/* Stiprybės */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('Pagrindinės stiprybės', 'Core Strengths')}</h3>
            <div className="flex flex-wrap gap-3">
              {strengths.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}