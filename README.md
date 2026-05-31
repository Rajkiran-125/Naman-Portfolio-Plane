# Naman Gupta — Photography Portfolio (Angular)

Angular 18 single-page app converted from the original plain-HTML/jQuery site
(Colorlib "Alime" template). The original static site is preserved under
[`public/`](public/) until visual parity is confirmed.

## Tech

- **Angular 18** standalone components, signal-based state, lazy-loaded routes.
- **No jQuery / no runtime UI libraries** — the hero slider, Instagram strip,
  gallery filter + masonry, lightbox, scroll animations, sticky nav and
  back-to-top are all reimplemented natively.
- The original template stylesheet and icon fonts are reused verbatim and served
  from [`src/assets/`](src/assets/) (linked via `assets/style.css` in `index.html`).

## Project layout

```
src/app/
  core/layout/   header, footer, preloader, back-to-top
  shared/        hero-slider, instagram-feed, gallery-grid, lightbox,
                 breadcrumb, animate-on-scroll.directive
  pages/         home, about, gallery, blog, contact, not-found
  data/          portfolio, instagram, blog, site (content as typed data)
```

## Develop

```bash
npm install
npm start          # ng serve  -> http://localhost:4200
```

## Build & deploy (Firebase Hosting)

```bash
npm run build      # outputs to dist/naman-portfolio/browser
firebase deploy --only hosting
```

`firebase.json` serves `dist/naman-portfolio/browser` with a SPA rewrite
(`** -> /index.html`) so client-side routes resolve on refresh / deep links.
