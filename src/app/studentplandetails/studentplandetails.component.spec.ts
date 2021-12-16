import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentplandetailsComponent } from './studentplandetails.component';

describe('StudentplandetailsComponent', () => {
  let component: StudentplandetailsComponent;
  let fixture: ComponentFixture<StudentplandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentplandetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentplandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
