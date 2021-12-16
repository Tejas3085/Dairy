import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentPlanComponent } from './update-student-plan.component';

describe('UpdateStudentPlanComponent', () => {
  let component: UpdateStudentPlanComponent;
  let fixture: ComponentFixture<UpdateStudentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
