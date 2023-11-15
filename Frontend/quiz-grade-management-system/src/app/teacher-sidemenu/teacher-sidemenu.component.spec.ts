import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSidemenuComponent } from './teacher-sidemenu.component';

describe('TeacherSidemenuComponent', () => {
  let component: TeacherSidemenuComponent;
  let fixture: ComponentFixture<TeacherSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSidemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
