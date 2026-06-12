import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';

/**
 * Reveal-on-scroll. Adds `is-visible` to the host the first time it enters the
 * viewport; the actual transition is defined in styles.scss via `[data-reveal]`.
 *
 * Usage: `<div appReveal="fade" revealDelay="120">`  (delay in ms)
 *   variants: 'up' (default) | 'fade' | 'left' | 'right' | 'zoom'
 *
 * Add `revealClip` for a clip-path image reveal instead of a transform.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') variant: 'up' | 'fade' | 'left' | 'right' | 'zoom' | '' = 'up';
  @Input() revealDelay = 0;
  @Input() revealClip = false;

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.host.nativeElement as HTMLElement;

    if (this.revealClip) {
      el.classList.add('clip-reveal');
    } else {
      el.setAttribute('data-reveal', this.variant || 'up');
    }
    if (this.revealDelay) {
      el.style.transitionDelay = `${this.revealDelay}ms`;
    }

    // No IntersectionObserver (or SSR): reveal immediately.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
