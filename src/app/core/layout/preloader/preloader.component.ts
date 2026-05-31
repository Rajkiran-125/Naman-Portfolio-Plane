import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

/** Replaces the jQuery `#preloader fadeOut` on window.load. */
@Component({
  selector: 'app-preloader',
  standalone: true,
  template: `
    @if (visible()) {
      <div id="preloader" [class.fade-out]="fading()">
        <div class="loader"></div>
      </div>
    }
  `,
  styles: [
    `
      #preloader {
        transition: opacity 400ms ease;
      }
      #preloader.fade-out {
        opacity: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreloaderComponent implements OnInit {
  readonly visible = signal(true);
  readonly fading = signal(false);

  ngOnInit(): void {
    const hide = () => {
      this.fading.set(true);
      setTimeout(() => this.visible.set(false), 450);
    };

    if (document.readyState === 'complete') {
      // App bootstrapped after window load — hide shortly after first paint.
      setTimeout(hide, 300);
    } else {
      window.addEventListener('load', hide, { once: true });
      // Safety net in case the load event already fired or is delayed.
      setTimeout(hide, 2500);
    }
  }
}
