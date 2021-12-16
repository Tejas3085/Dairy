import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPlanDetailsComponent } from './update-user-plan-details.component';

describe('UpdateUserPlanDetailsComponent', () => {
  let component: UpdateUserPlanDetailsComponent;
  let fixture: ComponentFixture<UpdateUserPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserPlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
