import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SampleDialogComponent } from './sample-dialog.component';

describe('SampleDialogComponent', () => {
  let component: SampleDialogComponent;
  let fixture: ComponentFixture<SampleDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
