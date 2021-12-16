import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgPlanDetailsComponent } from './org-plan-details.component';

describe('OrgPlanDetailsComponent', () => {
  let component: OrgPlanDetailsComponent;
  let fixture: ComponentFixture<OrgPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgPlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
