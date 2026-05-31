import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, BreadcrumbComponent, InstagramFeedComponent, AnimateOnScrollDirective],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly whyChoose = [
    {
      icon: 'fa fa-film',
      title: 'High Quality Images',
      text: 'Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te',
      delay: '100ms',
    },
    {
      icon: 'fa fa-pencil',
      title: 'Abundant Experience',
      text: 'Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te',
      delay: '300ms',
    },
    {
      icon: 'fa fa-camera',
      title: 'Modern Equipments',
      text: 'Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te',
      delay: '500ms',
    },
  ];
}
