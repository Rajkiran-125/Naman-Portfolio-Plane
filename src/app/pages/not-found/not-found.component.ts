import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="nf">
      <div class="container nf__inner">
        <span class="nf__eyebrow">Error 404</span>
        <h1 class="nf__code">404</h1>
        <h2 class="nf__title">This frame is out of focus</h2>
        <p class="nf__text">
          The page you're looking for has moved, been renamed, or never existed.
          Let's get you back to something beautiful.
        </p>
        <div class="nf__actions">
          <a routerLink="/" class="btn">Back home</a>
          <a routerLink="/gallery" class="btn btn--ghost">View gallery</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host { display: block; }
      .nf {
        min-height: 100svh;
        display: flex;
        align-items: center;
        text-align: center;
        background:
          radial-gradient(60% 60% at 50% 35%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%),
          var(--bg);
      }
      .nf__inner {
        padding-block: calc(var(--header-h) + 40px) 60px;
      }
      .nf__eyebrow {
        font-family: var(--font-head);
        font-size: 0.74rem;
        font-weight: 600;
        letter-spacing: 0.32em;
        text-transform: uppercase;
        color: var(--accent);
      }
      .nf__code {
        font-size: clamp(7rem, 26vw, 18rem);
        font-weight: 800;
        line-height: 0.9;
        letter-spacing: -0.05em;
        margin: 0.5rem 0;
        background: linear-gradient(180deg, var(--text), var(--text-muted));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .nf__title { font-size: clamp(1.4rem, 3vw, 2.2rem); margin-bottom: 1rem; }
      .nf__text {
        max-width: 460px;
        margin: 0 auto 2rem;
        color: var(--text-muted);
      }
      .nf__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
