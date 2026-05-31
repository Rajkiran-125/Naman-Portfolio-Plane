import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'naman-theme';

/**
 * Manages the site colour theme. Persists the user's choice in localStorage and
 * falls back to the OS preference on first visit. The `dark` class is toggled on
 * the <html> element; global overrides live in styles.scss.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<Theme>('light');

  constructor() {
    if (!this.isBrowser) {
      return;
    }
    this.theme.set(this.resolveInitialTheme());
    this.apply(this.theme());
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    if (!this.isBrowser) {
      return;
    }
    this.apply(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures (private mode, quota, etc.).
    }
  }

  private resolveInitialTheme(): Theme {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Ignore — fall through to system preference.
    }
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private apply(theme: Theme): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}
