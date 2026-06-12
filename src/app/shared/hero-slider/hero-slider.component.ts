import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { SITE, SOCIAL_LINKS } from '../../data/site';

interface HeroColumn {
  /** Images for this column, already duplicated for a seamless marquee loop. */
  frames: string[];
  /** Animation duration in seconds (varied per column for a parallax feel). */
  duration: number;
  /** Scroll direction. */
  down: boolean;
}

const COLUMN_COUNT = 4;
const PER_COLUMN = 6;

/**
 * Cinematic hero: columns of portfolio frames scroll vertically behind a scrim,
 * with an editorial headline, dual CTAs and a pinned social rail — a modern,
 * premium take on the classic photographer auto-scroll hero.
 */
@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSliderComponent {
  readonly role = SITE.role;
  readonly location = SITE.address;
  readonly socialLinks = SOCIAL_LINKS;

  readonly columns: HeroColumn[] = this.buildColumns();

  private buildColumns(): HeroColumn[] {
    const sources = PORTFOLIO_ITEMS.map((item) => item.src);
    const durations = [38, 52, 44, 60];
    const columns: HeroColumn[] = [];

    for (let c = 0; c < COLUMN_COUNT; c++) {
      const frames: string[] = [];
      for (let i = 0; i < PER_COLUMN; i++) {
        // Round-robin across the source list, wrapping as needed.
        frames.push(sources[(c + i * COLUMN_COUNT) % sources.length]);
      }
      columns.push({
        // Duplicate so the -50% marquee loops seamlessly.
        frames: [...frames, ...frames],
        duration: durations[c % durations.length],
        down: c % 2 === 1,
      });
    }
    return columns;
  }
}
