import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-sample-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <h1 mat-dialog-title>Dialog title</h1>

    <mat-dialog-content>
      This is just a sample dialog. Click close to dismiss!
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-flat-button [mat-dialog-close]="true">Close</button>
    </mat-dialog-actions>
  `,
})
export class SampleDialogComponent {}
