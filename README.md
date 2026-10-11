# Pranav Pandy Mohanapandian — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS, exported as a static site.
`CLAUDE.md` is the source of truth for content rules.

## Run locally

```bash
npm install        # first time only
npm run dev        # http://localhost:3000, reloads as you edit
npm run build      # production build → static site in out/
```

## Editing content

All text lives in **`src/data/profile.ts`**. You should not need to edit components.

| To change… | Edit in `profile.ts` |
|---|---|
| Tagline, About paragraphs | `tagline`, `about` |
| A job | `experience` |
| Skills | `skills` |
| Education | `education` |

### Add a GitHub link to a project
Add a `githubUrl` line to that project:

```ts
{
  title: "RoomSync",
  githubUrl: "https://github.com/pranav-pandy/roomsync",
  ...
}
```

The "View code on GitHub" link shows up only on cards that have a `githubUrl`.

### Add, remove, or reorder a project
Projects appear in the order of the `projects` array. To add one, copy an existing entry
and change its fields. `flagship: true` makes a card full width; `label: "Coursework"` adds a small badge.

### Project images
Each project can have `image: { src: "/projects/name.jpg", alt: "..." }`. Use a 16:9 JPEG, about 960×540 px, under 150 KB,
saved in `public/projects/`. Describe what the photo actually shows in `alt`.

### ML Projects page
`/ml-projects` lists `mlOnlyProjects` first, then every project in `projects` that has `ml: true`.
Its title and intro text are in `mlCollection`.

### Swap the resume PDF
1. Export the new resume **without your phone number**.
2. Save it as `public/Pranav_Mohanapandian_Resume_SDE.pdf`, replacing the old file.
3. Commit and push. Vercel redeploys automatically.

If you use a different filename, also update `resume` in `profile.ts`.

### Add a profile photo
1. Put a square image in `public/` (e.g. `public/profile.jpg`, about 400×400 px, under 200 KB).
2. In `profile.ts`, set `photo: "/profile.jpg"`.

### Change colors
Edit the color values at the top of `src/app/globals.css`: one block for light mode and one for dark mode.
Keep text colors at a contrast ratio of at least 4.5:1 against the background (https://webaim.org/resources/contrastchecker/).

## Deploying
Hosted on Vercel from GitHub. Every push to `main` triggers a redeploy.

## Image credits
All photos are CC0 (no attribution required) from StockSnap:

| File | Source |
|---|---|
| `public/projects/stock-trading.jpg` | https://stocksnap.io/photo/stocks-graph-MEDIALY3UV |
| `public/projects/stock-analyzer.jpg` | https://stocksnap.io/photo/analytics-charts-RCFX768X06 |
| `public/projects/roomsync.jpg` | https://stocksnap.io/photo/couch-furniture-TQNWBTLHLY |
| `public/projects/movie-recommender.jpg` | https://stocksnap.io/photo/architecture-building-LZDG3B8SXI |
| `public/projects/youtube-summarizer.jpg` | https://stocksnap.io/photo/technology-camera-H0O97B44CT |
| `public/projects/search-engine.jpg` | https://stocksnap.io/photo/library-books-D8RFKPCP0G |
| `public/projects/activity-recognition.jpg` | https://stocksnap.io/photo/running-fitness-RMDYXIJFJN |
| `public/projects/waste-classification.jpg` | https://stocksnap.io/photo/recycling-bins-H6T8IOA0RX |
| `public/projects/broken-run.jpg` | https://stocksnap.io/photo/blackandwhite-hand-PXRTGUA1NC |

`public/projects/tuberculosis.jpg` is made from sample X-rays in the Tuberculosis-Classification notebook.
