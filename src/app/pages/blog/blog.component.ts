import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { InstagramFeedComponent } from '../../shared/instagram-feed/instagram-feed.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';
import { BLOG_POSTS } from '../../data/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BreadcrumbComponent, InstagramFeedComponent, AnimateOnScrollDirective],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly posts = BLOG_POSTS;
}
