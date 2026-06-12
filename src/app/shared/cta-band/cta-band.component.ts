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
      <div class="container cta__inner" appReveal>
        <p class="eyebrow eyebrow--center">{{ eyebrow() }}</p>
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
      .cta {
        position: relative;
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
        background: rgba(8, 8, 8, 0.62);
      }
      .cta__inner {
        position: relative;
        padding-block: clamp(80px, 14vh, 160px);
        max-width: 720px;
      }
      .cta__inner .eyebrow { color: var(--accent-soft); margin-bottom: 1.2rem; }
      .cta__title {
        color: #fff;
        font-size: clamp(2rem, 5vw, 3.6rem);
        font-weight: 800;
        letter-spacing: -0.03em;
      }
      .cta__text {
        margin: 1.2rem auto 0;
        max-width: 520px;
        color: rgba(244, 242, 236, 0.85);
        font-size: 1.05rem;
      }
      .cta__actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-top: 2.4rem;
      }
      @media (max-width: 991px) {
        .cta { background-attachment: scroll; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaBandComponent {
  readonly eyebrow = input('Ready when you are');
  readonly title = input("Let's create something timeless");
  readonly text = input(
    'Whether it is a portrait, a campaign or a story worth telling — let us make it beautifully.',
  );
  readonly background = input('assets/img/bg-img/hero2.jpeg');
}
