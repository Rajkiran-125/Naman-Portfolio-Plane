import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';

/**
 * Gallery (`/gallery`) — the full archive. A dark page-hero masthead leads
 * straight into the filterable masonry grid + lightbox, so the experience is
 * image-first with minimal interruption. Curated collections live on
 * `/collections`.
 */
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, GalleryGridComponent],
  template: `
    <section class="page-hero" [style.--hero-bg]="'url(' + cover + ')'">
      <div class="container">
        <p class="eyebrow">Archive</p>
        <h1 class="page-hero__title">The Gallery</h1>
        <p class="page-hero__sub">
          The full body of work — {{ count }} frames across portraits, naturescapes, travel and
          motion. Filter by chapter, then tap any image to view it full-screen.
        </p>
      </div>
    </section>

    <section class="section gallery-archive">
      <div class="container container--wide">
        <header class="section-head section-head--center gallery-archive__head" appReveal>
          <p class="eyebrow eyebrow--center">Every frame</p>
          <h2 class="gallery-archive__title">Browse the complete library</h2>
        </header>
      </div>

      <app-gallery-grid [flushTop]="true" />
    </section>

    <div class="gallery-foot container" appReveal>
      <p class="text-muted">Looking for a curated edit instead of the full library?</p>
      <a routerLink="/collections" class="btn btn--ghost">
        Browse collections <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  `,
  styles: [
    `
      :host { display: block; }

      /* ---- Archive intro --------------------------------------------------- */
      .gallery-archive {
        padding-bottom: 0;
      }
      .gallery-archive__head {
        margin-bottom: 0;
      }
      .gallery-archive__title {
        font-family: var(--font-serif);
        font-weight: 500;
        letter-spacing: 0;
        font-size: clamp(1.9rem, 4vw, 3rem);
        line-height: 1.04;
        margin-top: 1.2rem;
      }

      /* ---- Footer link to collections -------------------------------------- */
      .gallery-foot {
        text-align: center;
        padding-top: clamp(2.5rem, 6vw, 4rem);
        padding-bottom: var(--section-y);
        border-top: 1px solid var(--border-soft);
      }
      .gallery-foot p { margin-bottom: 1.5rem; }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  readonly count = PORTFOLIO_ITEMS.length;
  readonly cover =
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/684ab8206717261.66d0dba53d230.jpg';
}
