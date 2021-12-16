import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentplanComponent } from './studentplan.component';

describe('StudentplanComponent', () => {
  let component: StudentplanComponent;
  let fixture: ComponentFixture<StudentplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
