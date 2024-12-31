import { Component, computed, effect, signal } from '@angular/core';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { TitleCasePipe } from '@angular/common';

export interface AppTheme {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbar,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatMenuModule,
    TitleCasePipe,
  ],
})
export class AppComponent {
  title = 'Angular material dark mode';

  appTheme = signal<'light' | 'dark' | 'system'>('system');

  themes = signal<AppTheme[]>([
    { name: 'light', icon: 'light_mode' },
    { name: 'dark', icon: 'dark_mode' },
    { name: 'system', icon: 'desktop_windows' },
  ]);

  selectedTheme = computed(() =>
    this.themes().find((t) => t.name === this.appTheme())
  );

  constructor(private dialog: MatDialog) {}

  showDialog(): void {
    this.dialog.open(SampleDialogComponent, {
      width: '500px',
    });
  }

  applyAppTheme = effect(() => {
    const appTheme = this.appTheme();
    const colorScheme = appTheme === 'system' ? 'light dark' : appTheme;
    document.body.style.setProperty('color-scheme', colorScheme);
  });
}
