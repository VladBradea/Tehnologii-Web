import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPersonalPageComponent } from './teacher-personal-page.component';

describe('TeacherPersonalPageComponent', () => {
  let component: TeacherPersonalPageComponent;
  let fixture: ComponentFixture<TeacherPersonalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPersonalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherPersonalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
