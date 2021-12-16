import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutDetailListComponent } from './user-workout-detail-list.component';

describe('UserWorkoutDetailListComponent', () => {
  let component: UserWorkoutDetailListComponent;
  let fixture: ComponentFixture<UserWorkoutDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWorkoutDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkoutDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
