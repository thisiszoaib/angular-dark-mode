import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <app-header></app-header>
    <app-content></app-content>
  `,
})
export class AppComponent {}
