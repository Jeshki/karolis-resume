'use client';

import { motion } from 'framer-motion';
import { IconBriefcase, IconPhone, IconCode } from '@tabler/icons-react'; 
import { useLanguage } from 'src/contexts/LanguageContext';

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("Programuotojas", "Developer"),
      company: "www.bithub.lt",
      period: t("2024-09 – Dabar", "2024-09 – Present"),
      icon: <IconCode size={24} />,
      tasks: [
        t("Web svetainių kūrimas ir priežiūra.", "Website development and maintenance."),
        t("Darbas su WordPress, WooCommerce, Elementor ir PHP technologijomis.", "Working with WordPress, WooCommerce, Elementor, and PHP technologies.")
      ],
      skills: t("WordPress, WooCommerce, Elementor, PHP", "WordPress, WooCommerce, Elementor, PHP")
    },
    {
      title: t("Vadybininkas", "Manager"),
      company: t("UAB „Medikatus” (prekyba kosmetinėmis priemonėmis)", "UAB 'Medikatus' (cosmetics trade)"),
      period: "2008 – 2024-02",
      icon: <IconBriefcase size={24} />,
      tasks: [
        t("Bendravimas su užsienio šalių partneriais, tiekėjais.", "Communication with foreign partners and suppliers."),
        t("Elektroninės parduotuvės IT priežiūra, administravimas, įmonės svetainės SEO optimizavimas.", "E-shop IT maintenance, administration, company website SEO optimization."),
        t("Pardavimų planavimas ir įmonės strategijos kūrimas.", "Sales planning and company strategy development."),
        t("Pirminė finansinė apskaita, darbas kasos aparatu, pagalba buhalteriui.", "Primary financial accounting, cash register operation, assistance to the accountant."),
        t("Prekių pristatymas didmenininkams ir sandėlio priežiūra.", "Goods delivery to wholesalers and warehouse maintenance.")
      ],
      skills: t("organizaciniai, vadybiniai, komunikaciniai, planavimo, derybų vedimo, finansinės apskaitos, konfliktų sprendimo", "organizational, management, communication, planning, negotiation, financial accounting, conflict resolution")
    },
    {
      title: t("Klientų aptarnavimo konsultantas", "Customer Service Consultant"),
      company: t("UAB „Lintel“ (specializuotos informacijos paslaugos)", "UAB 'Lintel' (specialized information services)"),
      period: "2006 – 2007",
      icon: <IconPhone size={24} />,
      tasks: [
        t("Profesionalus klientų konsultavimas ir techninė pagalba telefonu IT srityje.", "Professional customer consultation and technical support by phone in the IT field.")
      ],
      skills: t("komandinio darbo, problemų sprendimo, informacijos paieškos, komunikaciniai", "teamwork, problem-solving, information retrieval, communication")
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t('Darbo patirtis', 'Work Experience')}
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm italic text-gray-500">
                    <strong>{t('Pagrindiniai įgūdžiai:', 'Key skills:')}</strong> {exp.skills}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}