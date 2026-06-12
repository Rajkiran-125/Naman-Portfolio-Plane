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
      .preloader {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg);
        transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease);
      }
      .preloader.is-leaving {
        opacity: 0;
        visibility: hidden;
      }
      .preloader__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
      }
      .preloader__mark {
        font-family: var(--font-head);
        font-size: 52px;
        font-weight: 800;
        letter-spacing: -0.04em;
        color: var(--text);
        line-height: 1;
      }
      .preloader__name {
        font-family: var(--font-head);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        color: var(--accent);
      }
      .preloader__bar {
        position: relative;
        width: 160px;
        height: 2px;
        margin-top: 8px;
        background: var(--border);
        overflow: hidden;
      }
      .preloader__bar-fill {
        position: absolute;
        inset: 0;
        background: var(--accent);
        transform-origin: left;
        animation: preload 1.4s var(--ease) infinite;
      }
      @keyframes preload {
        0% { transform: scaleX(0); }
        50% { transform: scaleX(1); transform-origin: left; }
        50.1% { transform-origin: right; }
        100% { transform: scaleX(0); transform-origin: right; }
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
