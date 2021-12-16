import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserWorkoutDetailsComponent } from './update-user-workout-details.component';

describe('UpdateUserWorkoutDetailsComponent', () => {
  let component: UpdateUserWorkoutDetailsComponent;
  let fixture: ComponentFixture<UpdateUserWorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserWorkoutDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserWorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
