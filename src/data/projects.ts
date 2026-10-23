// PROJECT DATA. Edit this file to change, add or remove project cards.
//
// Every summary below was written after reading the project's own code.
// To add a project, copy one of the objects into the right list and edit it.
// "live" is optional: leave it out if there is no live site.

export type Project = {
  name: string
  repo: string
  summary: string
  tech: string[]
  live?: string
  // Preview image for featured cards, a file inside the "public" folder.
  // If you leave these out, a designed placeholder is shown instead.
  image?: string
  imageAlt?: string
}

export const githubProfile = 'https://github.com/Fransixgram'

export const featuredProjects: Project[] = [
  {
    name: 'Cosmo-Mobile-Spares-LTD',
    repo: 'https://github.com/Fransixgram/Cosmo-Mobile-Spares-LTD',
    summary:
      'A multi-page storefront for mobile phone spare parts and repair accessories. Visitors can browse the shop and categories, open product pages, use a cart and check out with delivery options. An admin area lets the owner manage products.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'Supabase', 'Paystack'],
    image: './projects/cosmo-mobile-spares.jpg',
    imageAlt: 'Screenshot of the Cosmo Mobile Spares home page',
  },
  {
    name: 'SIR-KEN-EYEWEAR',
    repo: 'https://github.com/Fransixgram/SIR-KEN-EYEWEAR',
    summary:
      'A responsive eyewear storefront with a product catalogue, a shopping cart drawer, about and testimonial sections, and an order form.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'lucide-react'],
    live: 'https://sir-ken-eyewear.vercel.app',
    image: './projects/sir-ken-eyewear.jpg',
    imageAlt: 'Screenshot of the SIR-KEN-EYEWEAR home page',
  },
]

export const secondaryProjects: Project[] = [
  {
    name: 'skyline-weather',
    repo: 'https://github.com/Fransixgram/skyline-weather',
    summary:
      'A weather app with current conditions, an hourly outlook, a 5-day forecast and a switch between °C and °F.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
  },
  {
    name: 'weather-dasboard',
    repo: 'https://github.com/Fransixgram/weather-dasboard',
    summary:
      'SkyCast, a weather dashboard with city search, recent searches, current conditions and a 5-day forecast.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
  },
  {
    name: 'fiat-currency-converter',
    repo: 'https://github.com/Fransixgram/fiat-currency-converter',
    summary:
      'RateXchange, a converter for 11 major currencies with a swap button. Its chart shows a simulated 7-day trend, not real history.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
  },
  {
    name: 'smart-todo-dashboard',
    repo: 'https://github.com/Fransixgram/smart-todo-dashboard',
    summary:
      'A to-do list for adding, completing and deleting tasks. Tasks are saved in the browser, so they are still there after a refresh.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Node-Store',
    repo: 'https://github.com/Fransixgram/Node-Store',
    summary:
      'A Node.js back-end API for a store, with authentication, user, admin and product routes, image uploads and email templates for account verification and password reset.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Nodemailer'],
  },
]
