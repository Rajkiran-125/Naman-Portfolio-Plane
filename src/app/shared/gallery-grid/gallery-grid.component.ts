import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import {
  PORTFOLIO_FILTERS,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
} from '../../data/portfolio';
import { LightboxComponent } from '../lightbox/lightbox.component';

/** Filterable masonry gallery with lightbox (replaces isotope + magnific-popup). */
@Component({
  selector: 'app-gallery-grid',
  standalone: true,
  imports: [LightboxComponent],
  templateUrl: './gallery-grid.component.html',
  styleUrl: './gallery-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryGridComponent {
  @Input() items: PortfolioItem[] = PORTFOLIO_ITEMS;
  /** Show the category filter buttons. */
  @Input() showFilters = true;

  readonly filters = PORTFOLIO_FILTERS;
  readonly activeFilter = signal<PortfolioCategory | null>(null);
  readonly lightboxIndex = signal<number | null>(null);

  readonly filtered = computed(() => {
    const f = this.activeFilter();
    if (!f) return this.items;
    return this.items.filter((item) => item.categories.includes(f));
  });

  readonly filteredSrcs = computed(() => this.filtered().map((i) => i.src));

  setFilter(value: PortfolioCategory | null): void {
    this.activeFilter.set(value);
  }

  open(index: number): void {
    this.lightboxIndex.set(index);
  }
}
