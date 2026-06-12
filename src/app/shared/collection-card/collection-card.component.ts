import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Collection } from '../../data/collections';

/** A single collection tile: cover image, name, photo count and hover overlay. */
@Component({
  selector: 'app-collection-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './collection-card.component.html',
  styleUrl: './collection-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionCardComponent {
  /** The collection to render. */
  readonly collection = input.required<Collection>();
}
