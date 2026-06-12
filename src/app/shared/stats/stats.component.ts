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

      .stats { padding-block: clamp(64px, 9vh, 110px); }

      .stats__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(2.4rem, 4vw, 3.5rem) 0;
      }

      .stat {
        text-align: center;
        position: relative;
        padding-inline: clamp(0.75rem, 2vw, 2rem);
      }

      /* Thin vertical hairline divider between items. */
      .stat:not(:last-child)::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: clamp(48px, 7vw, 72px);
        background: var(--border);
      }

      /* Huge editorial serif number. */
      .stat__value {
        display: block;
        font-family: var(--font-serif);
        font-size: clamp(3rem, 6vw, 5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        color: var(--text);
        line-height: 1;
        font-variant-numeric: lining-nums tabular-nums;
      }

      /* Small uppercase, tracked label beneath. */
      .stat__label {
        display: block;
        margin-top: 1.1rem;
        font-family: var(--font-head);
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        line-height: 1.5;
        color: var(--text-muted);
      }

      /* Tablet & mobile: 2 columns. */
      @media (max-width: 860px) {
        .stats__grid { grid-template-columns: repeat(2, 1fr); }
        /* Remove the divider after the 2nd item so each row reads cleanly. */
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
