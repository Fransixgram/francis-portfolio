// EXPERIENCE. Edit the wording below freely; it all appears in the Experience section.
//
// No dates are shown because none were provided. To add them later, fill in
// "period" (for example 'Jan 2025 – Present'). An empty period shows nothing.

export type ExperienceItem = {
  role: string
  company: string
  period: string // leave '' to show no dates
  summary: string
  tags: string[]
  placeholder?: boolean // true shows a dashed "Placeholder" card
}

// The timeline entries, newest first.
export const experienceItems: ExperienceItem[] = [
  {
    role: 'Product Manager & Sales Representative',
    company: 'Bejork Furniture Store',
    period: '',
    summary:
      'I work with customers to understand what they need, explain product options, and support sales. This role has strengthened my product thinking, communication, and ability to connect customer needs with practical solutions.',
    tags: ['Customer communication', 'Product thinking', 'Sales support'],
  },
]

// Teamwork on software projects. This is shown as its own card, not as a job on
// the timeline, because no employer or dates were given. To make it a timeline
// entry later, move it into experienceItems and fill in company and period.
export const collaboration = {
  title: 'Collaboration on software projects',
  summary:
    'I collaborate with other developers on software projects: sharing ideas, coordinating implementation, and contributing to solutions as part of a team.',
  tags: ['Sharing ideas', 'Coordinating implementation', 'Contributing to solutions'],
}
