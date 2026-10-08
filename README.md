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
