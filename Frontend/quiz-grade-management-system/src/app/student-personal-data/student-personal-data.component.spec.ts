import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPersonalDataComponent } from './student-personal-data.component';

describe('StudentPersonalDataComponent', () => {
  let component: StudentPersonalDataComponent;
  let fixture: ComponentFixture<StudentPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
