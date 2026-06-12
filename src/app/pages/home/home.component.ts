import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSliderComponent } from '../../shared/hero-slider/hero-slider.component';
import { CollectionsGridComponent } from '../../shared/collections-grid/collections-grid.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';
import { StatsComponent } from '../../shared/stats/stats.component';
import { ServicesComponent } from '../../shared/services/services.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroSliderComponent,
    CollectionsGridComponent,
    InstagramFeedComponent,
    StatsComponent,
    ServicesComponent,
    TestimonialsComponent,
    CtaBandComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly introImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c036a9200602291.666586566ccdb.jpeg';
}
