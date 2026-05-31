import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from '../../../data/site';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);

  readonly navItems = NAV_ITEMS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly logo = SITE.brandLogo;
  readonly theme = this.themeService.theme;

  readonly sticky = signal(false);
  readonly menuOpen = signal(false);
  readonly socialOpen = signal(false);
  readonly isMobile = signal(typeof window !== 'undefined' && window.innerWidth <= 991);

  @HostListener('window:scroll')
  onScroll(): void {
    this.sticky.set(window.scrollY > 0);
  }

  @HostListener('window:resize')
  onResize(): void {
    const mobile = window.innerWidth <= 991;
    this.isMobile.set(mobile);
    if (!mobile) {
      this.menuOpen.set(false);
      this.socialOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.socialOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleSocial(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    // Dropdown toggling only matters on mobile; desktop uses CSS hover.
    if (this.isMobile()) {
      this.socialOpen.update((v) => !v);
    }
  }
}
