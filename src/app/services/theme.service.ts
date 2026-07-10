import { Injectable, computed, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface AppTheme {
  name: ThemeMode;
  icon: string;
}

const STORAGE_KEY = 'angular-dark-mode-theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly appTheme = signal<ThemeMode>(this.readStoredTheme());

  private readonly themes: AppTheme[] = [
    { name: 'light', icon: 'light_mode' },
    { name: 'dark', icon: 'dark_mode' },
    { name: 'system', icon: 'desktop_windows' },
  ];

  readonly selectedTheme = computed(() =>
    this.themes.find((theme) => theme.name === this.appTheme())
  );

  constructor() {
    effect(() => {
      const theme = this.appTheme();
      const colorScheme = theme === 'system' ? 'light dark' : theme;

      document.documentElement.style.setProperty('color-scheme', colorScheme);
      localStorage.setItem(STORAGE_KEY, theme);
    });
  }

  getThemes(): AppTheme[] {
    return this.themes;
  }

  setTheme(theme: ThemeMode): void {
    this.appTheme.set(theme);
  }

  private readStoredTheme(): ThemeMode {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }

    return 'system';
  }
}
