import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutDetailsComponent } from './user-workout-details.component';

describe('UserWorkoutDetailsComponent', () => {
  let component: UserWorkoutDetailsComponent;
  let fixture: ComponentFixture<UserWorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkoutDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
