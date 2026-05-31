import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

/** Replaces the jQuery scrollUp plugin. Reuses the template's `#scrollUp` styling. */
@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    @if (visible()) {
      <a id="scrollUp" href="#" (click)="scrollTop($event)" aria-label="Back to top">
        <i class="arrow_carrot-up"></i>
      </a>
    }
  `,
  styles: [
    `
      #scrollUp {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 600);
  }

  scrollTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
