import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellingAppointmentListComponent } from './counselling-appointment-list.component';

describe('CounsellingAppointmentListComponent', () => {
  let component: CounsellingAppointmentListComponent;
  let fixture: ComponentFixture<CounsellingAppointmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellingAppointmentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellingAppointmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
