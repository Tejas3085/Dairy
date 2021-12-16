import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisereportComponent } from './exercisereport.component';

describe('ExercisereportComponent', () => {
  let component: ExercisereportComponent;
  let fixture: ComponentFixture<ExercisereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
