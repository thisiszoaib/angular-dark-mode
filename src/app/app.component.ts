import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular material dark mode';

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor(private dialog: MatDialog, private overlay: OverlayContainer) { }

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
    this.dialog.open(SampleDialogComponent,
      {
        width: '500px'
      });
  }

}
