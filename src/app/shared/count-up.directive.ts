import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

/**
 * Animates a number from 0 to a target value the first time the element scrolls
 * into view. Pure rAF, no dependencies.
 *
 * Usage: `<span appCountUp [countTo]="30" countSuffix="+"></span>`
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input() countTo = 0;
  @Input() countSuffix = '';
  @Input() countDuration = 1800;

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private raf?: number;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    el.textContent = `0${this.countSuffix}`;

    const reduce =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reduce) {
      el.textContent = `${this.countTo}${this.countSuffix}`;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.run(el);
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(el);
  }

  private run(el: HTMLElement): void {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / this.countDuration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = `${Math.round(eased * this.countTo)}${this.countSuffix}`;
      if (p < 1) {
        this.raf = requestAnimationFrame(tick);
      }
    };
    this.raf = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
