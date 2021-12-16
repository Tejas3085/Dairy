import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobMasterListComponent } from './apply-job-master-list.component';

describe('ApplyJobMasterListComponent', () => {
  let component: ApplyJobMasterListComponent;
  let fixture: ComponentFixture<ApplyJobMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyJobMasterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyJobMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
