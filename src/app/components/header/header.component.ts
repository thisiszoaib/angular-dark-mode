import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TitleCasePipe } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TitleCasePipe,
  ],
  template: `
    <mat-toolbar>
      Angular Dark Mode
      <div class="flex-stretch"></div>
      <button mat-icon-button [mat-menu-trigger-for]="themeMenu">
        <mat-icon>{{ themeService.selectedTheme()?.icon }}</mat-icon>
      </button>
      <mat-menu #themeMenu="matMenu">
        @for (theme of themeService.getThemes(); track theme.name) {
        <button
          [class.selected-theme]="
            themeService.selectedTheme()?.name === theme.name
          "
          mat-menu-item
          (click)="themeService.setTheme(theme.name)"
        >
          <mat-icon>{{ theme.icon }}</mat-icon>
          <span>{{ theme.name | titlecase }}</span>
        </button>
        }
      </mat-menu>
    </mat-toolbar>
  `,
  styles: `
    @use '@angular/material' as mat;

    mat-toolbar {
      display: flex;
      align-items: center;
    
      @include mat.toolbar-overrides(
        (
          container-background-color: var(--mat-sys-primary),
          container-text-color: var(--mat-sys-on-primary),
        )
      );
    
      @include mat.icon-button-overrides(
        (
          icon-color: var(--mat-sys-on-primary),
        )
      );
    }
    
    .selected-theme {
      @include mat.menu-overrides(
        (
          item-icon-color: var(--mat-sys-primary),
          item-label-text-color: var(--mat-sys-primary),
        )
      );
    }
    
    .flex-stretch {
      flex: 1 0 auto;
    }
  `,
})
export class HeaderComponent {
  protected themeService = inject(ThemeService);
}
