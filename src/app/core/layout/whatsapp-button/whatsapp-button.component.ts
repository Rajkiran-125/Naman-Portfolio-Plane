import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../../data/site';

/**
 * Floating WhatsApp inquiry button, bottom-right, present site-wide.
 * Stacks vertically ABOVE the back-to-top control (which sits at the corner)
 * so the two fixed floating actions never overlap. Monochrome editorial:
 * a square ink button with a white glyph — no bright green chrome.
 */
@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  template: `
    <a
      class="wa-fab"
      [href]="link"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
      <span class="wa-fab__pulse" aria-hidden="true"></span>
    </a>
  `,
  styles: [
    `
      .wa-fab {
        position: fixed;
        right: clamp(16px, 3vw, 32px);
        /* Park above the 50px back-to-top control at the same corner. */
        bottom: calc(clamp(16px, 3vw, 32px) + 50px + 14px);
        z-index: 1100;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        /* Pair with --text (both flip per theme) so the glyph always
           contrasts the box — unlike --on-dark, which is fixed cream in
           both themes and vanished against the light-theme ink block. */
        color: var(--bg);
        background: var(--text);
        border: 1px solid var(--text);
        border-radius: 0;
        box-shadow: var(--shadow-md);
        transition: background-color 0.4s var(--ease),
          color 0.4s var(--ease), border-color 0.4s var(--ease),
          transform 0.4s var(--ease);
      }
      .wa-fab:hover {
        color: var(--text);
        background: var(--bg);
        transform: translateY(-3px);
      }
      .wa-fab__pulse {
        position: absolute;
        inset: 0;
        border-radius: 0;
        border: 1px solid var(--text);
        z-index: -1;
        animation: wa-pulse 2.6s var(--ease-soft) infinite;
      }
      @keyframes wa-pulse {
        0% { transform: scale(1); opacity: 0.4; }
        70% { transform: scale(1.55); opacity: 0; }
        100% { opacity: 0; }
      }
      @media (prefers-reduced-motion: reduce) {
        .wa-fab__pulse { animation: none; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButtonComponent {
  readonly link = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Naman, I'd love to talk about a shoot.",
  )}`;
}
