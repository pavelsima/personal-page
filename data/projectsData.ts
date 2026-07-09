export type ProjectType = 'work' | 'personal'

export interface Project {
  title: string
  description: string
  imgSrc?: string
  href: string
  type: ProjectType
  role?: string
  tags?: string[]
  repo?: string
}

const projectsData: Project[] = [
  {
    title: 'NICE Bot Builder',
    description:
      'Chatbot-building platform with full lifecycle support — built in Vue.js with a Laravel backend and the Rasa framework. Also led PoC work on a no-code MCP tool builder (Nuxt + NestJS + GraphQL).',
    imgSrc: '/static/images/NICE.png',
    href: 'https://www.nice.com/cxone-mpower-agents',
    type: 'work',
    role: 'Senior Software Engineer · 2022 — Present',
    tags: ['Vue.js', 'Laravel', 'Rasa', 'GraphQL'],
  },
  {
    title: 'Easy Redmine',
    description:
      'Project management app I worked on as Frontend Developer at Easy Software. Vue.js, SASS, GraphQL, and Storybook on the cloud + on-prem versions.',
    imgSrc: '/static/images/er.png',
    href: 'https://easyredmine.com/',
    type: 'work',
    role: 'Frontend Developer · 2020 — 2022',
    tags: ['Vue.js', 'GraphQL', 'SCSS', 'Storybook'],
  },
  {
    title: 'Easy Project',
    description:
      'Project management app shipped alongside Easy Redmine. Same Vue.js + GraphQL stack, shared component library, with separate product surface for project teams.',
    imgSrc: '/static/images/ep.png',
    href: 'https://easyproject.com/',
    type: 'work',
    role: 'Frontend Developer · 2020 — 2022',
    tags: ['Vue.js', 'GraphQL', 'SCSS', 'Storybook'],
  },
  {
    title: 'Calculoid',
    description:
      'Calculator / form editor app where I led development as Calculoid Chief Developer at Easy Software. Built in AngularJS and Vue.js with a PHP (Joomla) backend.',
    imgSrc: '/static/images/calc.png',
    href: 'https://calculoid.com/',
    type: 'work',
    role: 'Calculoid Chief Developer · 2018 — 2020',
    tags: ['AngularJS', 'Vue.js', 'PHP'],
  },
  {
    title: 'Split Pay',
    description:
      'Open-source web app for creating shareable payment links with all the info baked in — generates SEPA, SPD QR codes and supports PayPal.',
    imgSrc: '/static/images/splitpay.png',
    href: 'https://splitpay.link/',
    type: 'personal',
    role: 'Personal · open source',
    tags: ['Vue.js', 'TypeScript', 'Firebase'],
    repo: 'https://github.com/pavelsima/splitpay',
  },
  {
    title: 'PKU Limiter',
    description:
      'Open-source mobile app for counting PHE / protein for Phenylketonuria — built for daily use, helps follow strict dietary restrictions.',
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/pavelsima/PkuLimiter',
    type: 'personal',
    role: 'Personal · open source',
    tags: ['React', 'Ionic', 'Capacitor'],
    repo: 'https://github.com/pavelsima/PkuLimiter',
  },
  {
    title: 'Bottle Temp Calculator',
    description:
      'Phone-friendly calculator for mixing hot and cold water from thermoses to the right bottle temperature while traveling — enter the current temps and it tells you the ml split in 5ml increments.',
    imgSrc: '/static/images/bottle-temp-calculator.png',
    href: '/bottle-temp-calculator',
    type: 'personal',
    role: 'Personal · quick utility',
    tags: ['Next.js', 'TypeScript'],
  },
]

export default projectsData
