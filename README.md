# Francis Portfolio

Personal portfolio website for **CHIDUBEM FRANCIS**, Full-stack Software Engineer.

Built with Vite, React, TypeScript and Tailwind CSS.

## Run it on your computer

You need Node.js 20 or newer. Then, from this folder:

```bash
npm install     # downloads the packages (first time only)
npm run dev     # starts the site at http://localhost:5173
```

Other commands:

```bash
npm run build   # checks the types and creates the production site in dist/
npm run preview # serves the built site locally
npm run lint    # checks the code for common problems
```

## How to edit your content

All the words, links and lists live in `src/data/`. You rarely need to touch the
components.

| File | What you change there |
| --- | --- |
| `src/data/profile.ts` | Name, hero text, portrait, CV link, stats, About text, menu, and the switches that show or hide the Experience and Notes sections |
| `src/data/projects.ts` | Project cards: summaries, technologies, repository and live links, screenshots |
| `src/data/skills.ts` | The Tech Stack list (one name per line) |
| `src/data/experience.ts` | Your experience entries and the team-collaboration card |
| `src/data/notes.ts` | Project-based Engineering Notes and reflections |
| `src/data/contact.ts` | Email, phone numbers, location and social links |

Other files you may want:

| Path | What it is |
| --- | --- |
| `src/index.css` | Theme colors (dark and light). Edit these to change the look. |
| `src/components/skillIcons.ts` | Which logo each skill tile uses |
| `public/` | Files served as they are: favicon, project screenshots (`public/projects/`). Put your portrait and CV here. |
| `index.html` | Page title, description and link-preview tags |

### Updating your portrait or CV

1. Copy the file into `public/` (for example `public/portrait.jpg` or `public/cv.pdf`).
2. In `src/data/profile.ts`, set `portrait.src` to `'./portrait.jpg'`, or `cv.href` to the CV filename (currently `'./francis-chidubem-cv.pdf'`).

## Publishing it for free

Push your code to GitHub first, then pick one of these.

### Vercel (recommended)

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account (the free Hobby plan is enough).
2. Click **Add New > Project** and import the `francis-portfolio` repository.
3. Vercel detects Vite automatically. Leave the settings as they are and click **Deploy**.
4. After about a minute you get a live address. Every later `git push` to `main` updates the site by itself.

### GitHub Pages

1. In your repository, open **Settings > Pages** and set the source to **GitHub Actions**.
2. Add a workflow that runs `npm ci` and `npm run build`, then publishes the `dist/` folder.
3. The site appears at `https://fransixgram.github.io/francis-portfolio/`. The project is already set up with relative paths (`base: './'`), so it works at that address.

When the site is live, add its address to the Open Graph tags in `index.html` (`og:url`) so link previews are complete.
