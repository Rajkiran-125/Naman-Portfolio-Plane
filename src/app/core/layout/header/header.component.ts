import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
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
export class HeaderComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly navItems = NAV_ITEMS;
  readonly socialLinks = SOCIAL_LINKS;
  readonly brand = SITE.brandName;
  readonly role = SITE.role;
  readonly theme = this.themeService.theme;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 991) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    this.lockScroll(this.menuOpen());
  }

  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.lockScroll(false);
    }
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  private lockScroll(lock: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = lock ? 'hidden' : '';
    }
  }
}
