import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellingappointmentComponent } from './counsellingappointment.component';

describe('CounsellingappointmentComponent', () => {
  let component: CounsellingappointmentComponent;
  let fixture: ComponentFixture<CounsellingappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounsellingappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounsellingappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
