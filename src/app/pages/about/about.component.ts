import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { StatsComponent } from '../../shared/stats/stats.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';
import { EQUIPMENT, FUN_FACTS, TIMELINE } from '../../data/content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    StatsComponent,
    CtaBandComponent,
    AnimateOnScrollDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly timeline = TIMELINE;
  readonly equipment = EQUIPMENT;
  readonly funFacts = FUN_FACTS;
}
