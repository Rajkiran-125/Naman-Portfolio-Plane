import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from '../../../data/site';

/** Floating WhatsApp inquiry button, bottom-left, present site-wide. */
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
        left: clamp(16px, 3vw, 32px);
        bottom: clamp(16px, 3vw, 32px);
        z-index: 1100;
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 27px;
        color: #fff;
        background: #25d366;
        border-radius: 50%;
        box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
        transition: transform 0.35s var(--ease);
      }
      .wa-fab:hover {
        transform: scale(1.08) translateY(-2px);
        color: #fff;
      }
      .wa-fab__pulse {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: #25d366;
        z-index: -1;
        animation: wa-pulse 2.4s var(--ease-soft) infinite;
      }
      @keyframes wa-pulse {
        0% { transform: scale(1); opacity: 0.5; }
        70% { transform: scale(1.7); opacity: 0; }
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
