import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlansListComponent } from './student-plans-list.component';

describe('StudentPlansListComponent', () => {
  let component: StudentPlansListComponent;
  let fixture: ComponentFixture<StudentPlansListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlansListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
