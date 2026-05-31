import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSliderComponent } from '../../shared/hero-slider/hero-slider.component';
import { GalleryGridComponent } from '../../shared/gallery-grid/gallery-grid.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent, GalleryGridComponent, InstagramFeedComponent],
  template: `
    <app-hero-slider />
    <app-gallery-grid />
    <app-instagram-feed />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
