import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlanDetailReportComponent } from './user-plan-detail-report.component';

describe('UserPlanDetailReportComponent', () => {
  let component: UserPlanDetailReportComponent;
  let fixture: ComponentFixture<UserPlanDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlanDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlanDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
