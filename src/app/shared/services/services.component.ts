import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../data/content';
import { AnimateOnScrollDirective } from '../animate-on-scroll.directive';

/** Services / pricing cards. Reused on the home and dedicated services pages. */
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  readonly eyebrow = input('What I offer');
  readonly title = input('Services & sessions');
  readonly subtitle = input('');
  readonly soft = input(false);
  readonly services = SERVICES;
}
