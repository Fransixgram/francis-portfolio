// ENGINEERING NOTES (articles).
// These are placeholders until you add real articles. Nothing here is real.
//
// To add a real article: replace a placeholder entry (or add a new one), fill in
// title, summary and meta, add "href" if the article is online, and remove
// "placeholder: true". To hide this whole section for now, set sections.notes
// to false in src/data/profile.ts.
//
// Experience now lives in src/data/experience.ts.

export type NoteItem = {
  title: string
  summary: string
  meta: string // for example "12 Mar 2027 · 5 min read"
  href?: string // link to the article, once it exists
  placeholder?: boolean
}

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
