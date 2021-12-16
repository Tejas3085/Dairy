import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganizationPlanComponent } from './updateorganizationplan.component';

describe('UpdateOrganizationPlanComponent', () => {
  let component: UpdateOrganizationPlanComponent;
  let fixture: ComponentFixture<UpdateOrganizationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrganizationPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganizationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
