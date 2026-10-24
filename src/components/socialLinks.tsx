// The social links shown as icon buttons in the Contact section and the footer.
// The addresses come from src/data/contact.ts. An empty address hides that button.
import { contact } from '../data/contact'
import { FacebookIcon, GithubIcon, LinkedinIcon, XIcon } from './icons'

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: contact.linkedin, icon: <LinkedinIcon className="h-4 w-4" /> },
  { id: 'facebook', label: 'Facebook', href: contact.facebook, icon: <FacebookIcon /> },
  { id: 'x', label: 'X', href: contact.x, icon: <XIcon /> },
  { id: 'github', label: 'GitHub', href: contact.github, icon: <GithubIcon /> },
].filter((s) => Boolean(s.href))
