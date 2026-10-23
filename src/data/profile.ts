// EDIT THIS FILE to change the name, hero text, stats, About text and navigation.
// Nothing here claims years of experience, employers or made-up numbers.

import { featuredProjects, secondaryProjects } from './projects'
import { skills } from './skills'

export const profile = {
  name: 'CHIDUBEM FRANCIS',
  initials: 'CF',
  title: 'Full-stack Software Engineer',
  headline: 'I build web and mobile applications.',
  intro:
    'A full-stack engineer working across JavaScript, TypeScript and PHP, from interfaces to APIs and databases.',
  github: 'https://github.com/Fransixgram',

  // PORTRAIT: put your photo in the "public" folder (for example public/portrait.jpg)
  // and set src to './portrait.jpg'. While src is empty, a placeholder is shown.
  portrait: {
    src: '',
    alt: 'Portrait of CHIDUBEM FRANCIS',
  },

  // CV BUTTON: put your CV in the "public" folder (for example public/cv.pdf)
  // and set href to './cv.pdf'. While href is empty, the button shows "CV coming soon".
  cv: { href: '' },

  // The small code panel on the hero. Change the stack to whatever you like.
  codePanel: {
    file: 'engineer.ts',
    stack: ['TypeScript', 'React', 'Node.js'],
  },
}

// STATS ROW under the hero buttons.
// The first two numbers are counted from your own data, so they stay true when you
// add projects or skills. The last two are placeholders: replace value and label
// with real facts you can stand behind, then remove "placeholder: true".
export const stats: { value: string; label: string; placeholder?: boolean }[] = [
  { value: String(featuredProjects.length + secondaryProjects.length), label: 'Projects showcased' },
  { value: String(skills.length), label: 'Technologies' },
  { value: '—', label: 'Add a stat', placeholder: true },
  { value: '—', label: 'Add a stat', placeholder: true },
]

// ABOUT SECTION. Each paragraph is one string. "icon" must be one of:
// code, server, smartphone, database, layers, globe.
export const about = {
  heading: 'A bit about me',
  paragraphs: [
    'I am a full-stack software engineer building web and mobile applications with JavaScript, TypeScript and PHP.',
    'My public projects include a phone-parts storefront with a cart, checkout and admin area, an eyewear storefront, a Node.js and Express back end, and several smaller JavaScript apps. You can see them below.',
  ],
  chips: [
    { icon: 'globe', label: 'Web apps' },
    { icon: 'smartphone', label: 'Mobile apps' },
    { icon: 'server', label: 'APIs and back ends' },
    { icon: 'database', label: 'Databases' },
  ],
  featureCards: [
    { icon: 'code', title: 'Front end', items: 'React · TypeScript · HTML5 · CSS3' },
    { icon: 'server', title: 'Back end', items: 'Node.js · Express · NestJS · Laravel' },
    { icon: 'smartphone', title: 'Mobile', items: 'React Native · Expo' },
    { icon: 'database', title: 'Data and cloud', items: 'MongoDB · MySQL · PostgreSQL · Redis · AWS' },
  ],
}

// NAVIGATION. "href" must match the id of a section on the page.
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Notes', href: '#notes' },
  { label: 'Contact', href: '#contact' },
]

// The button on the right of the header
export const headerCta = { label: "Let's talk", href: '#contact' }
