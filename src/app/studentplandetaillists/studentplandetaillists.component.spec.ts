import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentplandetaillistsComponent } from './studentplandetaillists.component';

describe('StudentplandetaillistsComponent', () => {
  let component: StudentplandetaillistsComponent;
  let fixture: ComponentFixture<StudentplandetaillistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentplandetaillistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentplandetaillistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
