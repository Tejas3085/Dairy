import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipPlanHistoryComponent } from './membership-plan-history.component';

describe('MembershipPlanHistoryComponent', () => {
  let component: MembershipPlanHistoryComponent;
  let fixture: ComponentFixture<MembershipPlanHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipPlanHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipPlanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
