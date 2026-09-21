export type Localized = {
  lt: string;
  en: string;
};

export type ProjectSlideSource = {
  src: string;
  alt: Localized;
};

export type CaseStudyContent = {
  summary: Localized;
  problem: Localized;
  solution: Localized;
  result: Localized;
  metrics: { value: Localized; label: Localized }[];
};

export type PortfolioProject = {
  slug: string;
  title: Localized;
  description: Localized;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  caseStudy?: CaseStudyContent;
  gallery?: ProjectSlideSource[];
  opensGalleryModal?: boolean;
};

export const todoTasksSlides: ProjectSlideSource[] = [
  {
    src: '/portfolio/todo-tasks/01-prisijungimas.png',
    alt: { lt: 'Prisijungimo langas', en: 'Sign-in screen' },
  },
  {
    src: '/portfolio/todo-tasks/02-uzduociu-lenta.png',
    alt: { lt: 'Užduočių lenta su stulpeliais', en: 'Task board with columns' },
  },
  {
    src: '/portfolio/todo-tasks/03-uzduoties-langas.png',
    alt: {
      lt: 'Užduoties langas su nuotraukomis ir komentarais',
      en: 'Task detail with photos and comments',
    },
  },
  {
    src: '/portfolio/todo-tasks/04-administravimas.png',
    alt: { lt: 'Administratoriaus skydelis', en: 'Admin dashboard' },
  },
  {
    src: '/portfolio/todo-tasks/05-eksportas-excel.png',
    alt: { lt: 'Eksportas į Excel', en: 'Export to Excel' },
  },
];

export const projects: PortfolioProject[] = [
  {
    slug: 'daeibirza',
    featured: true,
    title: { lt: 'DAEI birža', en: 'DAEI Exchange' },
    description: {
      lt: 'DAEI apskaitos vienetų aukciono ir prekybos platforma — skaidri prekyba atsinaujinančios energijos vienetais, Baltpool partneris.',
      en: 'DAEI accounting unit auction and trading platform — transparent trading of renewable fuel units, a Baltpool partner.',
    },
    image: '/daeibirza.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://www.daeibirza.lt',
    caseStudy: {
      summary: {
        lt: 'B2B prekybos platforma atsinaujinančios energijos apskaitos vienetams — nuo briefing’o iki viešo domeno.',
        en: 'A B2B trading platform for renewable energy accounting units — from briefing to a live client domain.',
      },
      problem: {
        lt: 'Rinkai reikėjo skaidrios DAEI vienetų prekybos ir aukciono vietos. B2B auditorija (energetika) tikisi aiškumo, pasitikėjimo ir greito veikimo — ne dekoratyvaus marketingo puslapio.',
        en: 'The market needed a transparent place to trade and auction DAEI units. A B2B energy audience expects clarity, trust, and speed — not a decorative marketing page.',
      },
      solution: {
        lt: 'Sukūriau Next.js + TypeScript platformą su ramiu, skaitomu UI, aiškia prekybos eiga ir Baltpool partnerystės komunikacija. Dėmesys — struktūrai, našumui ir tam, kad operatorius bei pirkėjas greitai rastų esmę.',
        en: 'I built a Next.js + TypeScript platform with a calm, readable UI, a clear trading flow, and Baltpool-partner messaging. The focus was structure, performance, and helping operators and buyers find the point fast.',
      },
      result: {
        lt: 'Veikianti platforma viešame kliento domene daeibirza.lt — paruošta realiai prekybai, ne tik demonstracijai.',
        en: 'A live platform on the client domain daeibirza.lt — ready for real trading, not just a demo.',
      },
      metrics: [
        { value: { lt: 'Live', en: 'Live' }, label: { lt: 'kliento domenas', en: 'client domain' } },
        { value: { lt: 'Baltpool', en: 'Baltpool' }, label: { lt: 'partneris', en: 'partner' } },
        { value: { lt: 'Next.js', en: 'Next.js' }, label: { lt: 'modernus stack', en: 'modern stack' } },
      ],
    },
  },
  {
    slug: 'apolobook',
    featured: true,
    title: { lt: 'Apolobook', en: 'Apolobook' },
    description: {
      lt: 'Premium PDF el. knygų parduotuvė — momentinis atsisiuntimas, Stripe mokėjimai ir saugus atsiskaitymas.',
      en: 'Premium PDF e-book store — instant downloads, Stripe payments, and secure checkout.',
    },
    image: '/apolobook.png',
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
    liveLink: 'https://www.apolobook.com',
    caseStudy: {
      summary: {
        lt: 'Lengva Next.js el. knygų vitrina su Stripe — momentinis failų pristatymas po apmokėjimo.',
        en: 'A lean Next.js e-book storefront with Stripe — files delivered instantly after payment.',
      },
      problem: {
        lt: 'Premium PDF knygoms reikėjo parduotuvės be sunkaus WooCommerce: saugus mokėjimas, momentinis atsisiuntimas ir švarus prekės ženklo įspūdis.',
        en: 'Premium PDF books needed a store without a heavy WooCommerce stack: secure payment, instant download, and a clean brand impression.',
      },
      solution: {
        lt: 'Next.js vitrina, Stripe checkout ir failų pristatymas po sėkmingo mokėjimo. Dizainas — ramus, skaitymui draugiškas, kad produktas atrodytų vertas kainos.',
        en: 'A Next.js storefront, Stripe checkout, and file delivery after a successful payment. The design stays calm and readable so the product feels worth the price.',
      },
      result: {
        lt: 'Veikianti parduotuvė apolobook.com — mokėjimai ir atsisiuntimai gamybinėje aplinkoje.',
        en: 'A live store at apolobook.com — payments and downloads in production.',
      },
      metrics: [
        { value: { lt: 'Stripe', en: 'Stripe' }, label: { lt: 'saugūs mokėjimai', en: 'secure payments' } },
        { value: { lt: 'PDF', en: 'PDF' }, label: { lt: 'momentinis pristatymas', en: 'instant delivery' } },
        { value: { lt: 'Live', en: 'Live' }, label: { lt: 'apolobook.com', en: 'apolobook.com' } },
      ],
    },
  },
  {
    slug: 'pilnasbusas',
    featured: true,
    title: { lt: 'Pilnasbusas', en: 'Pilnasbusas' },
    description: {
      lt: 'Elektroninė parduotuvė su alyvuogių aliejumi, užkandžiais, kava, kosmetika ir namų prekėmis. Sukurta su Shopify.',
      en: 'An e-commerce store for olive oil, snacks, coffee, cosmetics, and home goods. Built with Shopify.',
    },
    image: '/pilnasbusas.png',
    technologies: ['Shopify'],
    liveLink: 'https://www.pilnasbusas.lt',
    caseStudy: {
      summary: {
        lt: 'Shopify e-parduotuvė maisto ir namų prekėms — katalogas, mokėjimai ir valdymas be kasdienio programuotojo.',
        en: 'A Shopify store for food and home goods — catalog, payments, and day-to-day management without a developer.',
      },
      problem: {
        lt: 'Prekės ženklui su aliejumi, kava ir namų prekėmis reikėjo e-parduotuvės, kurią komanda galėtų pildyti patys, su patikimu checkout ir lietuvišku domenu.',
        en: 'A brand selling oil, coffee, and home goods needed a store the team could stock themselves, with reliable checkout and a Lithuanian domain.',
      },
      solution: {
        lt: 'Shopify parduotuvė: struktūruotas katalogas, mokėjimai ir pritaikytas vizualas, kad asortimentas atrodytų tvarkingai ir būtų lengva pirkti.',
        en: 'A Shopify store: structured catalog, payments, and tailored visuals so the range looks orderly and is easy to buy from.',
      },
      result: {
        lt: 'Live e-parduotuvė pilnasbusas.lt — fiksuotos apimties projektas, paruoštas kasdieniams užsakymams.',
        en: 'A live store at pilnasbusas.lt — a fixed-scope project ready for day-to-day orders.',
      },
      metrics: [
        { value: { lt: 'Shopify', en: 'Shopify' }, label: { lt: 'e-komercijos platforma', en: 'commerce platform' } },
        { value: { lt: 'LT', en: 'LT' }, label: { lt: 'kliento domenas', en: 'client domain' } },
        { value: { lt: 'Fiksuota', en: 'Fixed' }, label: { lt: 'projekto kaina', en: 'project price' } },
      ],
    },
  },
  {
    slug: 'kefyrousai',
    title: { lt: 'Kefyro ūsai', en: 'Kefyro ūsai' },
    description: {
      lt: 'Bariuko Palangoje svetainė su meniu, galerija, rezervacijomis ir Google atsiliepimais.',
      en: 'Website for a Palanga bar with menu, gallery, reservations, and Google reviews.',
    },
    image: '/kefyrousai.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://kefyro-usai.vercel.app',
  },
  {
    slug: 'evangelijos',
    title: { lt: 'Evangelijos', en: 'Evangelijos' },
    description: {
      lt: 'Gnostinių tekstų ir apokrifinių evangelijų biblioteka — Tomo, Marijos, Judo evangelijos ir Nag Hammadi rinkiniai.',
      en: 'A library of Gnostic texts and apocryphal gospels — Thomas, Mary, Judas, and Nag Hammadi collections.',
    },
    image: '/evangelijos.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://www.evangelijos.com',
  },
  {
    slug: 'dusofi',
    title: { lt: 'Dusofi svetainė', en: 'Dusofi website' },
    description: {
      lt: 'Ši svetainė sukurta siekiant pasidalinti nesenstančia išmintimi ir įkvepiančiais žodžiais.',
      en: 'This website was created from a desire to share timeless wisdom — words that inspire, encourage reflection, and offer new perspectives.',
    },
    image: '/dusofi.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://www.dusofi.lt',
    githubLink: 'https://github.com/Jeshki/dusofi-full',
  },
  {
    slug: 'jmdekoras',
    title: { lt: 'JM Dekoras', en: 'JM Dekoras' },
    description: {
      lt: 'Svetainė, skirta švenčių planavimui, dekoravimui ir unikalioms žvakėms.',
      en: 'A website for event planning, decoration, and unique candles.',
    },
    image: '/jmdekoras.png',
    technologies: ['Shopify'],
    liveLink: 'https://www.jmdekoras.lt',
  },
  {
    slug: 'praktinechirurgija',
    title: { lt: 'JMD Chirurgijos Studija', en: 'JMD Surgery Studio' },
    description: {
      lt: 'Burnos, veido ir žandikaulių chirurgijos klinikos svetainė su paslaugomis, specialistais, kainynu ir registracija.',
      en: 'A clinic website for oral and maxillofacial surgery, featuring services, specialists, pricing, and appointment registration.',
    },
    image: '/praktinechirurgija.png',
    technologies: ['WordPress'],
    liveLink: 'https://praktinechirurgija.lt',
  },
  {
    slug: 'papildusala',
    title: { lt: 'Papildų Sala', en: 'Supplement Island' },
    description: {
      lt: 'Elektroninė parduotuvė, prekiaujanti maisto papildais. Sukurta su WordPress ir WooCommerce.',
      en: 'An e-commerce store selling food supplements. Built with WordPress and WooCommerce.',
    },
    image: '/papildusala.png',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    liveLink: 'https://papildusala.lt/',
  },
  {
    slug: 'doviles-resume',
    title: { lt: 'Dovilės Resume', en: "Dovilė's Resume" },
    description: {
      lt: 'Moderni ir interaktyvi CV svetainė, skirta pristatyti Dovilės profesinę patirtį.',
      en: "A modern and interactive resume website built to showcase Dovilė's professional experience.",
    },
    image: '/doviles.png',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://doviles-resume.vercel.app/',
  },
  {
    slug: 'chomicius-cv',
    title: { lt: 'Chomicius CV', en: 'Chomicius CV' },
    description: {
      lt: 'Odontologo Deivido Chomiciaus profesinė CV svetainė su paslaugų pristatymu ir kontaktine informacija.',
      en: 'A professional CV website for dentist Deividas Chomicius, showcasing services and contact information.',
    },
    image: '/chomicius.png',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    liveLink: 'https://chomiciuscv.vercel.app',
    githubLink: 'https://github.com/Jeshki/ChomiciusCV',
  },
  {
    slug: 'uzduociu-lenta',
    title: { lt: 'Užduočių lenta', en: 'To-Do Tasks' },
    description: {
      lt: 'Užduočių valdymo aplikacija su prisijungimu, užduočių kūrimu ir būsenų sekimu. Sukurta su Next.js ir Prisma.',
      en: 'A task management app with authentication, task creation, and status tracking. Built with Next.js and Prisma.',
    },
    image: '/portfolio/todo-tasks/02-uzduociu-lenta.png',
    gallery: todoTasksSlides,
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    githubLink: 'https://github.com/Jeshki/to-do-tasks',
    opensGalleryModal: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
