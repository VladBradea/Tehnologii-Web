import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamChooserDialgComponent } from './exam-chooser-dialg.component';

describe('ExamChooserDialgComponent', () => {
  let component: ExamChooserDialgComponent;
  let fixture: ComponentFixture<ExamChooserDialgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamChooserDialgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamChooserDialgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
