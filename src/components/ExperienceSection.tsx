'use client';

import { motion } from 'framer-motion';
import { IconBriefcase, IconPhone, IconBuildingStore } from '@tabler/icons-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "Vadybininkas",
      company: "UAB „Medikatus” (prekyba kosmetinėmis priemonėmis)",
      period: "2008 – 2024-02",
      icon: <IconBuildingStore size={24} />,
      tasks: [
        "Bendravimas su užsienio šalių partneriais, tiekėjais.",
        "Elektroninės parduotuvės IT priežiūra, administravimas, SEO optimizavimas.",
        "Pardavimų planavimas ir įmonės strategijos kūrimas.",
        "Pirminė finansinė apskaita, darbas kasos aparatu, pagalba buhalteriui.",
        "Prekių pristatymas didmenininkams ir sandėlio priežiūra."
      ],
      skills: "organizaciniai, vadybiniai, komunikaciniai, planavimo, derybų vedimo, finansinės apskaitos, konfliktų sprendimo"
    },
    {
      title: "Klientų aptarnavimo konsultantas",
      company: "UAB „Lintel“ (specializuotos informacijos paslaugos)",
      period: "2006 – 2007",
      icon: <IconPhone size={24} />,
      tasks: [
        "Profesionalus klientų konsultavimas ir techninė pagalba telefonu IT srityje."
      ],
      skills: "komandinio darbo, problemų sprendimo, informacijos paieškos, komunikaciniai"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Darbo patirtis
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
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
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <span className="text-primary mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm italic text-gray-500">
                    <strong>Įgūdžiai:</strong> {exp.skills}
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