import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateASubjectComponent } from './create-a-subject.component';

describe('CreateASubjectComponent', () => {
  let component: CreateASubjectComponent;
  let fixture: ComponentFixture<CreateASubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateASubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateASubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
