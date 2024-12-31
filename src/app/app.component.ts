import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent],
  template: `
    <app-header></app-header>
    <app-content></app-content>
  `,
  styles: ``,
})
export class AppComponent {
  // Move theme-related logic to a service or keep it here and pass it to header component
}
