import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_NAV, SITE, SOCIAL_LINKS } from '../../../data/site';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly navItems = FOOTER_NAV;
  readonly socialLinks = SOCIAL_LINKS;
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
