import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

/**
 * Lightweight replacement for WOW.js. Hides the host element until it scrolls
 * into view, then applies animate.css classes (e.g. `animated fadeInUp`).
 *
 * Usage: `<div appAnimateOnScroll="fadeInUp" animateDelay="300ms">`
 */
@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  /** animate.css animation name, e.g. "fadeInUp", "bounceInDown". */
  @Input('appAnimateOnScroll') animation = 'fadeInUp';
  /** CSS animation-delay value, e.g. "300ms". */
  @Input() animateDelay = '0ms';

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;

    // No IntersectionObserver (or SSR): just show the element.
    if (typeof IntersectionObserver === 'undefined') {
      el.style.opacity = '1';
      return;
    }

    el.style.opacity = '0';

    this.observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.style.animationDelay = this.animateDelay;
            el.style.opacity = '1';
            el.classList.add('animated', this.animation);
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.08 },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
