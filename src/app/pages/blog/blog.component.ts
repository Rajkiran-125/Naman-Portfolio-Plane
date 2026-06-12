import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { CtaBandComponent } from '../../shared/cta-band/cta-band.component';
import { AnimateOnScrollDirective } from '../../shared/animate-on-scroll.directive';
import { BLOG_POSTS } from '../../data/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BreadcrumbComponent, CtaBandComponent, AnimateOnScrollDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly posts = BLOG_POSTS;
}
