import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  template: `
    <section class="nf">
      <div class="nf__scrim"></div>
      <div class="container nf__inner">
        <p class="eyebrow eyebrow--center nf__eyebrow" appReveal="fade">Error 404</p>
        <h1 class="nf__code" appReveal="up" [revealDelay]="80">404</h1>
        <h2 class="nf__title" appReveal="up" [revealDelay]="160">This frame is out of focus</h2>
        <p class="nf__text" appReveal="up" [revealDelay]="240">
          The page you're looking for has moved, been renamed, or never existed.
          Let's get you back to something beautiful.
        </p>
        <div class="nf__actions" appReveal="up" [revealDelay]="320">
          <a routerLink="/" class="btn btn--light">Back home</a>
          <a routerLink="/gallery" class="btn btn--outline-light">View gallery</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host { display: block; }

      /* Full-viewport dark masthead so the fixed, transparent header stays
         legible and the 404 shares the editorial page-hero rhythm. */
      .nf {
        position: relative;
        isolation: isolate;
        min-height: 100svh;
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: var(--header-h);
        background-color: #100f0e;
        background-image:
          radial-gradient(70% 70% at 50% 38%, rgba(255, 255, 255, 0.06), transparent 72%);
        color: var(--on-dark);
        overflow: hidden;
      }

      .nf__scrim {
        position: absolute;
        inset: 0;
        z-index: -1;
        background: var(--scrim);
        opacity: 0.6;
      }

      .nf__inner {
        position: relative;
        padding-block: clamp(48px, 9vh, 96px);
      }

      .nf__eyebrow {
        color: rgba(245, 244, 240, 0.7);
        margin-bottom: 1.4rem;
      }

      /* Big elegant serif display number. */
      .nf__code {
        font-family: var(--font-serif);
        font-weight: 500;
        font-size: clamp(7rem, 26vw, 18rem);
        line-height: 0.9;
        letter-spacing: -0.02em;
        margin: 0.2rem 0;
        color: var(--on-dark);
        text-shadow: 0 2px 60px rgba(0, 0, 0, 0.45);
      }

      .nf__title {
        font-family: var(--font-serif);
        font-weight: 500;
        font-size: clamp(1.6rem, 3.6vw, 2.6rem);
        line-height: 1.1;
        color: var(--on-dark);
        margin-bottom: 1.2rem;
      }

      .nf__text {
        max-width: 48ch;
        margin: 0 auto 2.4rem;
        font-size: clamp(1rem, 1.4vw, 1.12rem);
        font-weight: 300;
        line-height: 1.8;
        color: rgba(245, 244, 240, 0.74);
      }

      .nf__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      @media (max-width: 600px) {
        .nf__actions .btn { width: 100%; min-width: 0; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
