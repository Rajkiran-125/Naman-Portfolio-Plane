import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Premium page-title hero band used at the top of the inner pages. */
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  /** Big page heading, e.g. "About". */
  @Input({ required: true }) title = '';
  /** The active crumb label, e.g. "About". */
  @Input({ required: true }) crumb = '';
  /** Optional intro line under the title. */
  @Input() subtitle = '';
  /** Background image URL. */
  @Input() background = 'assets/img/bg-img/hero2.jpeg';
}
