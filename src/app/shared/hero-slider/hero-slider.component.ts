import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO_SLIDES } from '../../data/content';

/** Cinematic fullscreen hero: crossfading Ken Burns slides + dual CTAs. */
@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  readonly slides = HERO_SLIDES;
  readonly active = signal(0);

  private timer?: ReturnType<typeof setInterval>;
  private readonly intervalMs = 7000;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  goTo(i: number): void {
    this.active.set(i);
    this.restart();
  }

  private start(): void {
    this.timer = setInterval(() => {
      this.active.update((i) => (i + 1) % this.slides.length);
    }, this.intervalMs);
  }

  private stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }

  private restart(): void {
    this.stop();
    this.start();
  }
}
