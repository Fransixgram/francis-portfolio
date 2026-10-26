// Short project reflections displayed in the Engineering Notes section.

export type NoteItem = {
  title: string
  summary: string
  meta: string
}

export const noteItems: NoteItem[] = [
  {
    title: 'A storefront starts with the buying journey',
    summary:
      'In the Cosmo Mobile Spares project, the storefront connects category browsing, product pages, a cart and delivery choices before checkout. Thinking through that sequence helps each screen answer the customer’s next question and keeps the path from discovery to order easy to follow.',
    meta: 'Project reflection · Cosmo Mobile Spares',
  },
  {
    title: 'Keep product information consistent across a shop',
    summary:
      'A product appears in more than one place: category lists, detail pages, the cart and the owner’s admin tools. Keeping those views tied to the same product data makes changes easier to manage and reduces the chance that a customer sees conflicting details while shopping.',
    meta: 'Project reflection · Storefronts',
  },
  {
    title: 'Give API routes clear responsibilities',
    summary:
      'Node-Store separates authentication, user, admin and product routes. Keeping those entry points distinct makes it easier to understand which part of the application handles a request, and gives future changes a clearer place to belong.',
    meta: 'Project reflection · Node-Store',
  },
  {
    title: 'Choose browser storage for the right-sized problem',
    summary:
      'The Smart Todo Dashboard saves tasks in the browser so they remain after a refresh. Local storage is a straightforward fit for a small personal tool, while its browser-specific nature makes clear that it does not provide account-based sync across devices.',
    meta: 'Project reflection · Smart Todo Dashboard',
  },
]
