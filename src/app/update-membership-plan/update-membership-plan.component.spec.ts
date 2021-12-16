import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMembershipPlanComponent } from './update-membership-plan.component';

describe('UpdateMembershipPlanComponent', () => {
  let component: UpdateMembershipPlanComponent;
  let fixture: ComponentFixture<UpdateMembershipPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMembershipPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMembershipPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
