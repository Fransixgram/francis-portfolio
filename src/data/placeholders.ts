// EXPERIENCE and ENGINEERING NOTES.
// Both are placeholders until you add real details. Nothing here is real.
//
// To add real content: replace the placeholder entry, or add new entries, and
// remove "placeholder: true" from each one you have filled in.

export type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
  tags: string[]
  placeholder?: boolean
}

export type NoteItem = {
  title: string
  summary: string
  meta: string // for example "12 Mar 2027 · 5 min read"
  href?: string // link to the article, once it exists
  placeholder?: boolean
}

export const experienceItems: ExperienceItem[] = [
  {
    role: 'Your role title',
    company: 'Company name',
    period: 'Start date – End date',
    summary:
      'A short description of what you built or looked after in this role goes here. Replace this placeholder with real details.',
    tags: [],
    placeholder: true,
  },
]

export const noteItems: NoteItem[] = [
  {
    title: 'Article title goes here',
    summary: 'A one or two sentence summary of the article will appear here.',
    meta: 'Date · Read time',
    placeholder: true,
  },
  {
    title: 'Article title goes here',
    summary: 'A one or two sentence summary of the article will appear here.',
    meta: 'Date · Read time',
    placeholder: true,
  },
  {
    title: 'Article title goes here',
    summary: 'A one or two sentence summary of the article will appear here.',
    meta: 'Date · Read time',
    placeholder: true,
  },
  {
    title: 'Article title goes here',
    summary: 'A one or two sentence summary of the article will appear here.',
    meta: 'Date · Read time',
    placeholder: true,
  },
]
