import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [BreadcrumbComponent, GalleryGridComponent, InstagramFeedComponent],
  template: `
    <app-breadcrumb title="Gallery" crumb="Gallery" />
    <app-gallery-grid />
    <app-instagram-feed />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {}
