import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
  itemCategory,
  itemTitle,
} from '../../data/portfolio';
import { LightboxComponent, LightboxImage } from '../lightbox/lightbox.component';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

/** Filterable masonry gallery with a premium lightbox. */
@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [LightboxComponent, AnimateOnScrollDirective],
  templateUrl: './gallery-grid.component.html',
  styleUrl: './gallery-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryGridComponent {
  readonly items = input<PortfolioItem[]>(PORTFOLIO_ITEMS);
  readonly showFilters = input(true);
  readonly flushTop = input(false);

  readonly filters = PORTFOLIO_FILTERS;
  readonly activeFilter = signal<PortfolioCategory | null>(null);
  readonly lightboxIndex = signal<number | null>(null);

  readonly title = itemTitle;
  readonly category = itemCategory;

  readonly filtered = computed(() => {
    const f = this.activeFilter();
    const items = this.items();
    return f ? items.filter((item) => item.categories.includes(f)) : items;
  });

  readonly lightboxImages = computed<LightboxImage[]>(() =>
    this.filtered().map((i) => ({
      src: i.src,
      title: itemTitle(i),
      meta: [itemCategory(i), i.location].filter(Boolean).join(' · '),
    })),
  );

  setFilter(value: PortfolioCategory | null): void {
    this.activeFilter.set(value);
  }

  open(index: number): void {
    this.lightboxIndex.set(index);
  }
}
