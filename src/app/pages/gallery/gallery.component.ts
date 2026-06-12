import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CollectionsGridComponent } from '../../shared/collections-grid/collections-grid.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CollectionsGridComponent,
    GalleryGridComponent,
    InstagramFeedComponent,
    AnimateOnScrollDirective,
  ],
  template: `
    <app-breadcrumb
      title="Gallery"
      crumb="Gallery"
      subtitle="Browse by collection, or wander through the full archive below."
      background="https://mir-s3-cdn-cf.behance.net/project_modules/disp/684ab8206717261.66d0dba53d230.jpg"
    />

    <app-collections-grid
      eyebrow="Collections"
      title="Browse by theme"
      subtitle="Distinct bodies of work, each with its own mood and story."
    />

    <div class="section section--soft">
      <div class="container">
        <div class="section-head section-head--center" appReveal>
          <p class="eyebrow eyebrow--center">Every frame</p>
          <h2>The full archive</h2>
          <p class="lead">Filter the complete library of photographs and tap any image to view it full-screen.</p>
        </div>
      </div>
      <app-gallery-grid [flushTop]="true" />
    </div>

    <app-instagram-feed [showHeading]="false" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {}
