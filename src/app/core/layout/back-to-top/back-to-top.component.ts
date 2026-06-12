import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

/** Floating back-to-top control, bottom-right. Appears after scrolling down. */
@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    <button
      type="button"
      class="to-top"
      [class.is-visible]="visible()"
      (click)="scrollTop()"
      aria-label="Back to top"
    >
      <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  `,
  styles: [
    `
      /* Square, monochrome floating control — ink block, paper arrow. */
      .to-top {
        position: fixed;
        right: clamp(16px, 3vw, 32px);
        bottom: clamp(16px, 3vw, 32px);
        z-index: 1100;
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: var(--bg);
        background: var(--text);
        border: 1px solid var(--text);
        border-radius: 0;
        box-shadow: var(--shadow-md);
        opacity: 0;
        visibility: hidden;
        transform: translateY(16px);
        transition: opacity 0.4s var(--ease), transform 0.4s var(--ease),
          background-color 0.4s var(--ease), color 0.4s var(--ease);
      }
      .to-top.is-visible {
        opacity: 1;
        visibility: visible;
        transform: none;
      }
      /* Subtle invert on hover — ink block empties to its outline. */
      .to-top:hover {
        color: var(--text);
        background: var(--bg);
        transform: translateY(-3px);
      }
      .to-top i {
        transition: transform 0.4s var(--ease);
      }
      .to-top:hover i {
        transform: translateY(-2px);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 700);
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
