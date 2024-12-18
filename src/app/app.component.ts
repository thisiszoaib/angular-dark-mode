import { Component, HostBinding, OnInit } from '@angular/core';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new UntypedFormControl(false);

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) {}

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  showDialog(): void {
    this.dialog.open(SampleDialogComponent, {
      width: '500px',
    });
  }
}
