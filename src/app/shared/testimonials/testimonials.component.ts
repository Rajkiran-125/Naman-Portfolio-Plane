import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  computed,
  input,
  signal,
} from '@angular/core';
import { TESTIMONIALS } from '../../data/content';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

/** Auto-advancing testimonial carousel with rating, quote and client. */
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly soft = input(true);
  readonly items = TESTIMONIALS;

  readonly active = signal(0);
  readonly current = computed(() => this.items[this.active()]);
  readonly stars = computed(() => Array.from({ length: this.current().rating }));

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.start();
  }
  ngOnDestroy(): void {
    this.stop();
  }

  go(i: number): void {
    this.active.set((i + this.items.length) % this.items.length);
    this.restart();
  }
  next(): void {
    this.go(this.active() + 1);
  }
  prev(): void {
    this.go(this.active() - 1);
  }

  private start(): void {
    this.timer = setInterval(() => this.active.update((i) => (i + 1) % this.items.length), 6500);
  }
  private stop(): void {
    if (this.timer) clearInterval(this.timer);
  }
  private restart(): void {
    this.stop();
    this.start();
  }
}
