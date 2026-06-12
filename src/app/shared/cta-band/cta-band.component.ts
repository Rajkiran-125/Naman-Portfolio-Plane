import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

/** Full-bleed call-to-action band with a parallax-style cover image. */
@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  template: `
    <section class="cta" [style.background-image]="'url(' + background() + ')'">
      <div class="cta__scrim"></div>
      <div class="container cta__inner" appReveal="up">
        <p class="eyebrow eyebrow--center cta__eyebrow">{{ eyebrow() }}</p>
        <h2 class="cta__title">{{ title() }}</h2>
        <p class="cta__text">{{ text() }}</p>
        <div class="cta__actions">
          <a routerLink="/contact" class="btn btn--light">Book a session</a>
          <a routerLink="/gallery" class="btn btn--outline-light">View portfolio</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host { display: block; }

      /* Bold full-width CTA — a dark editorial band over a scrimmed cover image,
         kept dark in both themes for a high-contrast close. Light-on-dark only:
         never var(--accent) here (it would resolve to black in light mode). */
      .cta {
        position: relative;
        isolation: isolate;
        background-color: #0c0b0a;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: var(--on-dark);
        text-align: center;
        overflow: hidden;
      }

      .cta__scrim {
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(
          180deg,
          rgba(8, 7, 6, 0.7) 0%,
          rgba(8, 7, 6, 0.58) 45%,
          rgba(8, 7, 6, 0.78) 100%
        );
      }

      .cta__inner {
        position: relative;
        max-width: 760px;
        padding-block: var(--section-y);
      }

      .cta__eyebrow {
        color: rgba(245, 244, 240, 0.72);
        margin-bottom: 1.5rem;
      }
      /* Override the global eyebrow rules' currentColor lines for the lighter band. */
      .cta__eyebrow::before,
      .cta__eyebrow::after {
        opacity: 0.4;
      }

      .cta__title {
        font-family: var(--font-serif);
        font-weight: 500;
        color: var(--on-dark);
        font-size: clamp(2.4rem, 6vw, 4.6rem);
        line-height: 1.02;
        letter-spacing: -0.005em;
      }

      .cta__text {
        margin: 1.4rem auto 0;
        max-width: 56ch;
        color: rgba(245, 244, 240, 0.74);
        font-size: clamp(1rem, 1.4vw, 1.18rem);
        font-weight: 300;
        line-height: 1.85;
      }

      .cta__actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-top: clamp(2.2rem, 4vw, 3rem);
      }

      @media (max-width: 991px) {
        .cta { background-attachment: scroll; }
      }

      @media (max-width: 480px) {
        .cta__actions .btn { width: 100%; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBandComponent {
  readonly eyebrow = input('Ready when you are');
  readonly title = input("Let's create something worth framing.");
  readonly text = input(
    'Whether it is a portrait, a campaign or a story worth telling — let us make it beautifully.',
  );
  readonly background = input('assets/img/bg-img/hero2.jpeg');
}
