import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlanDetailListComponent } from './user-plan-detail-list.component';

describe('UserPlanDetailListComponent', () => {
  let component: UserPlanDetailListComponent;
  let fixture: ComponentFixture<UserPlanDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlanDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlanDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
