import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs';
import { getCollectionBySlug } from '../../data/collections';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';

/**
 * Collection detail page (`/gallery/:slug`). Resolves the slug to a collection and
 * shows its photos in the shared masonry grid + lightbox. Reacts to slug changes so
 * navigating between collections (without a full reload) re-renders correctly.
 */
@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, GalleryGridComponent, CtaBandComponent],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  /** Current `:slug` route param, kept in sync as the route changes. */
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
  );

  /** The matching collection, or `undefined` when the slug is unknown. */
  readonly collection = computed(() => {
    const slug = this.slug();
    return slug ? getCollectionBySlug(slug) : undefined;
  });

  constructor() {
    // Keep the browser tab title in step with the active collection.
    effect(() => {
      const collection = this.collection();
      this.titleService.setTitle(
        collection ? `${collection.name} | Naman Portfolio` : 'Collection | Naman Portfolio',
      );
    });
  }
}
