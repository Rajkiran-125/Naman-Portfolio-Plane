import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { SITE } from '../../../data/site';

/** Elegant full-screen loading screen shown until the app + window have loaded. */
@Component({
  selector: 'app-preloader',
  standalone: true,
  template: `
    @if (visible()) {
      <div class="preloader" [class.is-leaving]="fading()" aria-hidden="true">
        <div class="preloader__inner">
          <span class="preloader__mark">{{ initials }}</span>
          <span class="preloader__name">{{ name }}</span>
          <span class="preloader__bar"><span class="preloader__bar-fill"></span></span>
        </div>
      </div>
    }
  `,
  styles: [
    `
      /* Full-screen B&W masthead — solid ink, light-on-dark marks only
         (var(--accent) would be black here and vanish). */
      .preloader {
        --pre-text: #f5f4f0;
        --pre-line: rgba(245, 244, 240, 0.16);
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0c0b0a;
        transition: opacity 0.7s var(--ease), transform 0.7s var(--ease),
          visibility 0.7s var(--ease);
      }
      .preloader.is-leaving {
        opacity: 0;
        transform: translateY(-12px);
        visibility: hidden;
      }
      .preloader__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: clamp(20px, 3.4vw, 30px);
        padding-inline: var(--gutter);
        text-align: center;
      }
      /* Brand monogram — quiet, sits above the wordmark. */
      .preloader__mark {
        font-family: var(--font-serif);
        font-size: clamp(40px, 7vw, 58px);
        font-weight: 500;
        letter-spacing: 0.04em;
        color: var(--pre-text);
        line-height: 1;
        opacity: 0;
        animation: preFade 0.9s var(--ease) 0.1s forwards;
      }
      /* Wordmark — tracked uppercase Poppins, the hero of the screen. */
      .preloader__name {
        font-family: var(--font-head);
        font-size: clamp(13px, 1.5vw, 16px);
        font-weight: 600;
        letter-spacing: 0.42em;
        text-transform: uppercase;
        color: var(--pre-text);
        /* compensate trailing tracking so it reads optically centred */
        padding-left: 0.42em;
        opacity: 0;
        animation: preFade 0.9s var(--ease) 0.28s forwards;
      }
      /* Thin animated underline that sweeps under the wordmark. */
      .preloader__bar {
        position: relative;
        width: clamp(140px, 22vw, 220px);
        height: 1px;
        margin-top: 4px;
        background: var(--pre-line);
        overflow: hidden;
        opacity: 0;
        animation: preFade 0.9s var(--ease) 0.42s forwards;
      }
      .preloader__bar-fill {
        position: absolute;
        inset: 0;
        background: var(--pre-text);
        transform-origin: left;
        animation: preload 1.6s var(--ease) infinite;
      }
      @keyframes preFade {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: none; }
      }
      @keyframes preload {
        0% { transform: scaleX(0); }
        50% { transform: scaleX(1); transform-origin: left; }
        50.1% { transform-origin: right; }
        100% { transform: scaleX(0); transform-origin: right; }
      }
      @media (prefers-reduced-motion: reduce) {
        .preloader__mark,
        .preloader__name,
        .preloader__bar {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
        }
        .preloader__bar-fill { animation: none !important; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreloaderComponent implements OnInit {
  readonly visible = signal(true);
  readonly fading = signal(false);
  readonly initials = SITE.brandInitials;
  readonly name = SITE.brandName;

  ngOnInit(): void {
    const hide = () => {
      this.fading.set(true);
      setTimeout(() => this.visible.set(false), 650);
    };

    if (document.readyState === 'complete') {
      setTimeout(hide, 500);
    } else {
      window.addEventListener('load', hide, { once: true });
      setTimeout(hide, 2800); // safety net
    }
  }
}
