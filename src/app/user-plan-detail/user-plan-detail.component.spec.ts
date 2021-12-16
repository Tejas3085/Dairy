import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlanDetailComponent } from './user-plan-detail.component';

describe('UserPlanDetailComponent', () => {
  let component: UserPlanDetailComponent;
  let fixture: ComponentFixture<UserPlanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
