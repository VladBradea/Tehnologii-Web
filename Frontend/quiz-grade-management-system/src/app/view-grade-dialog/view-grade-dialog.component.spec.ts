import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradeDialogComponent } from './view-grade-dialog.component';

describe('ViewGradeDialogComponent', () => {
  let component: ViewGradeDialogComponent;
  let fixture: ComponentFixture<ViewGradeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGradeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
