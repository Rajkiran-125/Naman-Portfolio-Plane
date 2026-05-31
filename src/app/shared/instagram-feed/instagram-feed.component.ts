import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { INSTAGRAM_HANDLE, INSTAGRAM_ITEMS } from '../../data/instagram';

/** Auto-scrolling Instagram strip (replaces the owl-carousel loop). */
@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  templateUrl: './instagram-feed.component.html',
  styleUrl: './instagram-feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstagramFeedComponent {
  /** Show the "Follow Instagram" heading above the strip. */
  @Input() showHeading = true;

  readonly handle = INSTAGRAM_HANDLE;
  // Duplicated so the marquee can loop seamlessly with translateX(-50%).
  readonly loop = [...INSTAGRAM_ITEMS, ...INSTAGRAM_ITEMS];
}
