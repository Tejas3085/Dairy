import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutDetailHistoryComponent } from './user-workout-detail-history.component';

describe('UserWorkoutDetailHistoryComponent', () => {
  let component: UserWorkoutDetailHistoryComponent;
  let fixture: ComponentFixture<UserWorkoutDetailHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkoutDetailHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkoutDetailHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
