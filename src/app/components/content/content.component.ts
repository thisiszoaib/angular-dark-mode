import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from '../../sample-dialog/sample-dialog.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
  ],
  template: `
    <div class="content responsive-grid">
      <div>
        <h3>Buttons</h3>

        <div class="flex-row">
          <button mat-flat-button (click)="showDialog()">Open Dialog</button>
          <button class="accent" mat-flat-button>Accent button</button>
          <button class="warn" mat-flat-button>Warn button</button>
        </div>

        <br /><br />

        <h3>Input</h3>

        <mat-form-field>
          <input matInput placeholder="Enter some information" />
        </mat-form-field>

        <br /><br />

        <h3>Checkbox</h3>

        <mat-checkbox>Check this box!</mat-checkbox>

        <br /><br />

        <h3>Expansion panel</h3>

        <mat-expansion-panel hideToggle>
          <mat-expansion-panel-header>
            <mat-panel-title> Expansion title </mat-panel-title>
            <mat-panel-description>
              This is a summary of the content
            </mat-panel-description>
          </mat-expansion-panel-header>
          <p>This is the primary content of the panel.</p>
        </mat-expansion-panel>

        <br /><br />
      </div>
      <div>
        <h3>A card</h3>
        <mat-card class="example-card" appearance="outlined">
          <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>Shiba Inu</mat-card-title>
            <mat-card-subtitle>Dog Breed</mat-card-subtitle>
          </mat-card-header>
          <img
            mat-card-image
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
            alt="Photo of a Shiba Inu"
          />
          <mat-card-content>
            <p>
              The Shiba Inu is the smallest of the six original and distinct
              spitz breeds of dog from Japan. A small, agile dog that copes very
              well with mountainous terrain, the Shiba Inu was originally bred
              for hunting.
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: `
    .content {
      padding: 32px;
      min-height: 100vh;
    
      background-color: var(--mat-sys-background);
      color: var(--mat-sys-on-background);
    }
    
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 1rem;
    }
    
    .flex-row {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    
    mat-card {
      max-width: 400px;
    }
    
    h3 {
      font-weight: 400;
    }
  `,
})
export class ContentComponent {
  private dialog = inject(MatDialog);

  showDialog(): void {
    this.dialog.open(SampleDialogComponent, {
      width: '500px',
    });
  }
}
