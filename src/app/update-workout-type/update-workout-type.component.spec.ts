import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkoutTypeComponent } from './update-workout-type.component';

describe('UpdateWorkoutTypeComponent', () => {
  let component: UpdateWorkoutTypeComponent;
  let fixture: ComponentFixture<UpdateWorkoutTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWorkoutTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkoutTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
