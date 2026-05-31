import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  computed,
  signal,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SITE } from '../../data/site';

interface HeroSlide {
  background: string;
  titleLines: string[];
  text: string;
  /** animate.css name applied to the text layers of the active slide. */
  anim: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  readonly email = SITE.email;

  readonly slides: HeroSlide[] = [
    {
      background: 'assets/img/bg-img/hero1.jpeg',
      titleLines: ['Naman Gupta'],
      text: 'I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.',
      anim: 'bounceInDown',
    },
    {
      background: 'assets/img/bg-img/hero2.jpeg',
      titleLines: ['Hello', 'Naman'],
      text: 'I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.',
      anim: 'bounceInUp',
    },
  ];

  readonly active = signal(0);
  /** Single-element array of the active slide; the changing track key re-runs the text animation. */
  readonly current = computed(() => [this.slides[this.active()]]);
  private timer?: ReturnType<typeof setInterval>;
  private readonly intervalMs = 10000;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  next(): void {
    this.active.update((i) => (i + 1) % this.slides.length);
    this.restart();
  }

  prev(): void {
    this.active.update((i) => (i - 1 + this.slides.length) % this.slides.length);
    this.restart();
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
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  private restart(): void {
    this.stop();
    this.start();
  }
}
