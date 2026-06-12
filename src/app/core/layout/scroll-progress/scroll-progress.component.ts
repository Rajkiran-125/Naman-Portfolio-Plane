import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

/** Thin reading-progress bar pinned to the top of the viewport. */
@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `<div class="scroll-progress" [style.transform]="'scaleX(' + progress() + ')'"></div>`,
  styles: [
    `
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: 1300;
        background: var(--text);
        transform-origin: 0 50%;
        transform: scaleX(0);
        will-change: transform;
        transition: background-color 0.5s var(--ease-soft);
      }

      @media (prefers-reduced-motion: reduce) {
        .scroll-progress {
          transition: none;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollProgressComponent {
  readonly progress = signal(0);

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.progress.set(max > 0 ? Math.min(doc.scrollTop / max, 1) : 0);
  }
}
