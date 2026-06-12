import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { STATS } from '../../data/content';
import { CountUpDirective } from '../count-up.directive';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

/** Animated statistics band with count-up numbers. */
@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CountUpDirective, AnimateOnScrollDirective],
  template: `
    <section class="stats" [class.section--soft]="soft()">
      <div class="container stats__grid">
        @for (stat of stats; track stat.label; let i = $index) {
          <div class="stat" appReveal [revealDelay]="i * 100">
            <span class="stat__value" appCountUp [countTo]="stat.value" [countSuffix]="stat.suffix"></span>
            <span class="stat__label">{{ stat.label }}</span>
          </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host { display: block; }
      .stats { padding-block: clamp(56px, 8vh, 96px); }
      .stats__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(1.5rem, 4vw, 3rem);
      }
      .stat {
        text-align: center;
        position: relative;
      }
      .stat:not(:last-child)::after {
        content: '';
        position: absolute;
        right: calc(clamp(1.5rem, 4vw, 3rem) / -2);
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 56px;
        background: var(--border);
      }
      .stat__value {
        display: block;
        font-family: var(--font-head);
        font-size: clamp(2.4rem, 5vw, 4rem);
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--text);
        line-height: 1;
      }
      .stat__label {
        display: block;
        margin-top: 0.7rem;
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-muted);
      }
      @media (max-width: 640px) {
        .stats__grid { grid-template-columns: repeat(2, 1fr); gap: 2.4rem 1.5rem; }
        .stat:nth-child(2)::after { display: none; }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  readonly soft = input(false);
  readonly stats = STATS;
}
