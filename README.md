# Aman Mishra — Portfolio

A React (Vite) portfolio site inspired by the layout/interaction language of
rickallan.work — dark editorial theme, big display type, live local clock,
fullscreen menu, scroll-reveal sections.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

- `src/data/content.js` — all editable copy: profile info, about text, skills,
  work experience, and the **work / case-studies array (currently empty)**.
- `src/components/` — one component + matching `.css` file per section:
  `Navbar`, `MenuOverlay`, `Hero`, `About`, `Experience`, `Work`, `Contact`,
  `Preloader`.
- `src/index.css` — theme tokens (colors, fonts, spacing), grain texture,
  grid overlay, shared utility classes (`.btn`, `.eyebrow`, `.section`, etc).

## Adding your work later

Open `src/data/content.js` and fill in the `work` array, e.g.:

```js
export const work = [
  {
    title: "Project name",
    tag: "UI/UX",
    year: "2026",
    description: "One-line summary.",
    image: "/work/project-1.jpg", // put images in /public/work/
    link: "https://...",
  },
];
```

Then update `src/components/Work.jsx` to render a card per item (the empty
state currently shown will automatically be replaced once `work.length > 0`
in that component's logic — extend the `work-grid` block to design the cards).

## Theme

- Colors, fonts and spacing all live as CSS variables at the top of
  `src/index.css` — change `--red`, `--ink`, `--bg-0/1/2` to retheme quickly.
- Fonts: **Anton** (display headlines) + **Space Grotesk** (body/UI), loaded
  from Google Fonts in `index.html`.

## Notes

- Social links in `src/data/content.js` (`profile.socials`) currently point
  to `#` — swap in your real LinkedIn/Behance/Instagram URLs.
- The hero currently shows an "AM" monogram in place of a photo — swap
  `.hero-portrait-frame` in `Hero.jsx` for an `<img>` once you have a shot
  you like.
