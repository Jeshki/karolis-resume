'use client';

import { motion } from 'framer-motion';
// PATAISYMAS ČIA: Pakeista 'IconBrandShopify' į 'IconBuildingStore'
import { 
  IconLanguage, IconDeviceDesktop, IconBrandFigma, IconTools, IconMoodSmile, 
  IconSteeringWheel, IconBrain, IconBrandTypescript, IconBrandJavascript, 
  IconBrandHtml5, IconBrandSass, IconBrandTailwind, IconBrandBootstrap, 
  IconBrandGit, IconBrandReact, IconBrandRedux, IconBrandNextjs, 
  IconBrandPython, IconBrandPhp, IconBrandWordpress, IconShoppingCart, IconLayoutCollage,
  IconBuildingStore // <-- Pakeista ikona
} from '@tabler/icons-react';
import { useLanguage } from 'src/contexts/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  const techSkills = [
    { name: "Figma", icon: <IconBrandFigma size={16} /> },
    { name: "TypeScript", icon: <IconBrandTypescript size={16} /> },
    { name: "JavaScript", icon: <IconBrandJavascript size={16} /> },
    { name: "React (JSX)", icon: <IconBrandReact size={16} /> },
    { name: "HTML5", icon: <IconBrandHtml5 size={16} /> },
    { name: "Sass", icon: <IconBrandSass size={16} /> },
    { name: "Tailwind CSS", icon: <IconBrandTailwind size={16} /> },
    { name: "Bootstrap", icon: <IconBrandBootstrap size={16} /> },
    { name: "Git", icon: <IconBrandGit size={16} /> },
    { name: "Redux", icon: <IconBrandRedux size={16} /> },
    { name: "Next.js", icon: <IconBrandNextjs size={16} /> },
    { name: "Python", icon: <IconBrandPython size={16} /> },
    { name: "PHP", icon: <IconBrandPhp size={16} /> },
    { name: "WordPress", icon: <IconBrandWordpress size={16} /> },
    { name: "WooCommerce", icon: <IconShoppingCart size={16} /> },
    { name: "Elementor", icon: <IconLayoutCollage size={16} /> },
    // PATAISYMAS ČIA: Pakeista ikona
    { name: "Shopify", icon: <IconBuildingStore size={16} /> }, 
  ];

  const languages = [
    { name: t("Anglų k.", "English"), level: t("įgudęs", "Proficient"), percent: 90 },
    { name: t("Rusų k.", "Russian"), level: t("pažengęs", "Advanced"), percent: 70 }
  ];

  const strengths = [
    { name: t("Komunikabilumas", "Communication"), icon: <IconMoodSmile /> },
    { name: t("Sprendimų paieška", "Solution-seeking"), icon: <IconBrain /> },
    { name: t("IT išmanymas", "IT Literacy"), icon: <IconDeviceDesktop /> },
    { name: t("Atsparumas stresui", "Stress Resistance"), icon: <IconMoodSmile /> },
    { name: t("Saviugda ir tobulėjimas", "Self-development"), icon: <IconBrain /> },
    { name: t("Kantrybė", "Patience"), icon: <IconMoodSmile /> },
    { name: t("Pozityvumas", "Positivity"), icon: <IconMoodSmile /> },
  ];

  const otherSkills = [
    { name: t("MS Office (Word, Excel) – profesionalus", "MS Office (Word, Excel) – Professional"), icon: <IconTools /> },
    { name: t("Apskaitos pr. „Būtent“ – įgudęs", "Accounting prg. 'Būtent' – Proficient"), icon: <IconTools /> },
    { name: t("Grafikos dizainas (Canva, Illustrator) – profesionalus", "Graphic Design (Canva, Illustrator) – Professional"), icon: <IconTools /> },
    { name: t("B kategorijos vairuotojo pažymėjimas", "B Category Driver's License"), icon: <IconSteeringWheel /> },
  ];


  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t('Įgūdžiai ir Stiprybės', 'Skills & Strengths')}
        </motion.h2>

        {/* Tech Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <IconBrandFigma className="text-primary" /> {t('Programavimas ir Web Technologijos', 'Programming & Web Technologies')}
          </h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill.icon}
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <IconLanguage className="text-primary" /> {t('Užsienio kalbos', 'Languages')}
          </h3>
          <div className="space-y-4">
            {languages.map((lang, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-gray-500">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-primary h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths & Other Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <IconMoodSmile className="text-primary" /> {t('Stiprybės', 'Strengths')}
            </h3>
            <ul className="space-y-3">
              {strengths.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-primary p-1 bg-primary/10 rounded-full">{skill.icon}</span> {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <IconDeviceDesktop className="text-primary" /> {t('Kiti įgūdžiai', 'Other Skills')}
            </h3>
            <ul className="space-y-3">
              {otherSkills.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="text-primary p-1 bg-primary/10 rounded-full">{skill.icon}</span> {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}