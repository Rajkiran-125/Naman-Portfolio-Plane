import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Page-title hero band used on the inner pages (replaces the jarallax breadcrumb). */
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  /** Big page heading, e.g. "About Us". */
  @Input({ required: true }) title = '';
  /** The active crumb label, e.g. "About". */
  @Input({ required: true }) crumb = '';
  /** Background image URL. */
  @Input() background = 'assets/img/bg-img/hero2.jpeg';
}
