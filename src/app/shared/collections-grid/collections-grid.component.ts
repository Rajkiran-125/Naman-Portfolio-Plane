import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { COLLECTIONS, Collection } from '../../data/collections';
import { CollectionCardComponent } from '../collection-card/collection-card.component';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

/**
 * Grid of collection cards with an editorial section header. Reused on the home
 * ("Selected work") and gallery ("Collections") pages. Handles loading (skeleton)
 * and empty states so it can sit in front of an async source without markup change.
 */
@Component({
  selector: 'app-collections-grid',
  standalone: true,
  imports: [CollectionCardComponent, AnimateOnScrollDirective],
  templateUrl: './collections-grid.component.html',
  styleUrl: './collections-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsGridComponent {
  readonly eyebrow = input('Collections');
  readonly title = input('Selected work');
  readonly subtitle = input('');
  readonly collections = input<Collection[]>(COLLECTIONS);
  readonly loading = input(false);

  protected readonly skeletons = Array.from({ length: 4 });
}
