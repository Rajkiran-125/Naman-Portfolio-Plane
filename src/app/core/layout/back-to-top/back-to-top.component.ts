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
      .to-top {
        position: fixed;
        right: clamp(16px, 3vw, 32px);
        bottom: clamp(16px, 3vw, 32px);
        z-index: 1100;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: var(--accent-contrast);
        background: var(--text);
        border-radius: 50%;
        box-shadow: var(--shadow-md);
        opacity: 0;
        visibility: hidden;
        transform: translateY(16px);
        transition: opacity 0.4s var(--ease), transform 0.4s var(--ease),
          background-color 0.4s var(--ease);
      }
      .to-top.is-visible {
        opacity: 1;
        visibility: visible;
        transform: none;
      }
      .to-top:hover {
        background: var(--accent);
        transform: translateY(-3px);
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
