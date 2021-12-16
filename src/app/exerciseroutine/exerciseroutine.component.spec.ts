import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseroutineComponent } from './exerciseroutine.component';

describe('ExerciseroutineComponent', () => {
  let component: ExerciseroutineComponent;
  let fixture: ComponentFixture<ExerciseroutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseroutineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseroutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
