import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COLLECTIONS } from '../../data/collections';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

/**
 * Collections index (`/collections`). A large-format editorial listing of every
 * body of work — each row pairs a full cover image with its story, alternating
 * sides for rhythm. Tapping a row opens its masonry grid at `/gallery/:slug`.
 */
@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [RouterLink, CtaBandComponent, AnimateOnScrollDirective],
  template: `
    <section class="page-hero" [style.--hero-bg]="'url(' + cover + ')'">
      <div class="container">
        <p class="eyebrow">Portfolio</p>
        <h1 class="page-hero__title">Collections</h1>
        <p class="page-hero__sub">
          Distinct bodies of work — each with its own mood, place and story.
        </p>
      </div>
    </section>

    <section class="section collections-index">
      <div class="container">
        <header class="section-head collections-index__head" appReveal>
          <p class="eyebrow">Bodies of work</p>
          <h2 class="collections-index__count">
            {{ collections.length }} collections · {{ totalPhotos }} photographs
          </h2>
          <p class="lead">
            Curated edits spanning portraits, naturescapes, travel and motion. Step inside any
            collection to view every frame full-screen.
          </p>
        </header>

        <div class="collections-index__list">
          @for (col of collections; track col.id; let i = $index) {
            <a
              class="feature"
              [class.feature--rev]="i % 2 === 1"
              [routerLink]="['/gallery', col.slug]"
              appReveal
              [revealDelay]="i * 80"
              [attr.aria-label]="col.name + ' — ' + col.images.length + ' photographs'"
            >
              <div class="feature__media">
                <img [src]="col.coverImage" [alt]="col.name + ' cover photograph'" loading="lazy" decoding="async" />
                <span class="feature__count">{{ col.images.length }} Photos</span>
                <span class="feature__view" aria-hidden="true">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <div class="feature__body">
                <span class="feature__index" aria-hidden="true">{{ i + 1 < 10 ? '0' : '' }}{{ i + 1 }}</span>
                <h3 class="feature__name">{{ col.name }}</h3>
                <p class="feature__desc">{{ col.description }}</p>
                <span class="feature__cta link-underline">
                  Open collection <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </span>
              </div>
            </a>
          }
        </div>

        <div class="collections-index__more" appReveal>
          <p class="text-muted">Want to see everything in one place?</p>
          <a routerLink="/gallery" class="btn btn--ghost">
            Explore the full archive <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>

    <app-cta-band
      eyebrow="Commissions"
      title="A collection of your own"
      text="Portraits, brand stories or fine-art naturescapes — let's create the next body of work together."
      [background]="ctaBg"
    />
  `,
  styles: [
    `
      :host { display: block; }

      /* ---- Intro head ---------------------------------------------------- */
      .collections-index__head {
        max-width: 660px;
        margin-bottom: clamp(3rem, 7vw, 5.5rem);
      }
      .collections-index__count {
        font-family: var(--font-serif);
        font-weight: 500;
        letter-spacing: 0;
        font-size: clamp(1.9rem, 4vw, 3rem);
        line-height: 1.04;
      }
      .collections-index__head .lead { margin-top: 1.2rem; }

      /* ---- Alternating feature rows -------------------------------------- */
      .collections-index__list {
        display: flex;
        flex-direction: column;
        gap: clamp(3rem, 8vw, 7rem);
      }

      .feature {
        display: grid;
        grid-template-columns: 1.12fr 0.88fr;
        align-items: center;
        gap: clamp(1.6rem, 5vw, 4.5rem);
        color: inherit;
      }
      .feature--rev { direction: rtl; }
      .feature--rev > * { direction: ltr; }

      .feature__media {
        position: relative;
        aspect-ratio: 3 / 2;
        overflow: hidden;
        border-radius: 0;
        background: var(--surface-2);
      }
      .feature__media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 1s var(--ease);
      }
      .feature:hover .feature__media img,
      .feature:focus-visible .feature__media img {
        transform: scale(1.05);
      }
      /* Subtle dark wash on hover (collection-card pattern). */
      .feature__media::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(8, 7, 6, 0.28);
        opacity: 0;
        transition: opacity 0.5s var(--ease);
      }
      .feature:hover .feature__media::after,
      .feature:focus-visible .feature__media::after {
        opacity: 1;
      }

      /* Square count badge over imagery — white on a dark scrim, never accent. */
      .feature__count {
        position: absolute;
        z-index: 1;
        top: 16px;
        left: 16px;
        padding: 7px 14px;
        font-family: var(--font-head);
        font-size: 0.64rem;
        font-weight: 500;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #fff;
        background: rgba(10, 9, 7, 0.42);
        backdrop-filter: blur(6px);
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 0;
      }

      /* Square reveal-arrow chip over imagery (collection-card __view). */
      .feature__view {
        position: absolute;
        z-index: 1;
        right: 16px;
        bottom: 16px;
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: #141414;
        background: var(--on-dark);
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.5s var(--ease), transform 0.5s var(--ease);
      }
      .feature:hover .feature__view,
      .feature:focus-visible .feature__view {
        opacity: 1;
        transform: none;
      }

      /* ---- Feature body -------------------------------------------------- */
      .feature__index {
        display: block;
        font-family: var(--font-head);
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.24em;
        color: var(--text-muted);
        margin-bottom: 1rem;
      }
      .feature__name {
        font-family: var(--font-serif);
        font-weight: 500;
        letter-spacing: 0;
        font-size: clamp(1.9rem, 4.2vw, 3.1rem);
        line-height: 1.04;
        transition: opacity 0.3s var(--ease);
      }
      .feature:hover .feature__name,
      .feature:focus-visible .feature__name {
        opacity: 0.62;
      }
      .feature__desc {
        margin-top: 1.1rem;
        color: var(--text-muted);
        font-size: 1.02rem;
        line-height: 1.8;
        max-width: 40ch;
      }
      .feature__cta {
        margin-top: 1.7rem;
      }

      /* ---- Footer link to full archive ----------------------------------- */
      .collections-index__more {
        margin-top: clamp(3.5rem, 8vw, 6rem);
        padding-top: clamp(2.5rem, 5vw, 4rem);
        border-top: 1px solid var(--border-soft);
        text-align: center;
      }
      .collections-index__more p { margin-bottom: 1.5rem; }

      /* ---- Responsive ---------------------------------------------------- */
      @media (max-width: 860px) {
        .feature,
        .feature--rev {
          grid-template-columns: 1fr;
          direction: ltr;
          gap: clamp(1.2rem, 4vw, 2rem);
        }
        .feature__media { aspect-ratio: 4 / 3; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsComponent {
  readonly collections = COLLECTIONS;
  readonly totalPhotos = COLLECTIONS.reduce((sum, c) => sum + c.images.length, 0);
  readonly cover = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/684ab8206717261.66d0dba53d230.jpg';
  readonly ctaBg = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b2e896200602291.666586566b430.jpg';
}
