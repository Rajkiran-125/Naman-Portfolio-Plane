import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSliderComponent } from '../../shared/hero-slider/hero-slider.component';
import { CollectionsGridComponent } from '../../shared/collections-grid/collections-grid.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';

/**
 * Home — a gallery-first landing page. Imagery leads: a cinematic hero, the
 * collections grid, the Instagram strip and a closing CTA. Deliberately light on
 * copy — the marketing detail (services, stats, testimonials) lives on its pages.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroSliderComponent,
    CollectionsGridComponent,
    InstagramFeedComponent,
    CtaBandComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
