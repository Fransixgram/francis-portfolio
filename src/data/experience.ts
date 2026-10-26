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
      'I speak with customers to understand what they are looking for, ask questions when they need help narrowing down options, and explain product features in clear, practical terms. I support the sales process by helping customers compare choices and make informed decisions. This day-to-day work has strengthened how I listen, communicate trade-offs, and think about a product from the customer’s point of view.',
    tags: ['Customer needs', 'Product guidance', 'Clear communication', 'Sales support'],
  },
]

// Teamwork on software projects. This is shown as its own card, not as a job on
// the timeline, because no employer or dates were given. To make it a timeline
// entry later, move it into experienceItems and fill in company and period.
export const collaboration = {
  title: 'Collaboration on software projects',
  summary:
    'I work with other developers to turn a shared idea into a clear set of tasks. We discuss the approach, coordinate who is handling each part, share progress as implementation moves forward, and bring the pieces together into a working solution. I value asking questions early, communicating changes, and making it easy for teammates to understand how my contribution fits into the larger project.',
  tags: ['Planning together', 'Implementation', 'Progress updates', 'Team communication'],
}
