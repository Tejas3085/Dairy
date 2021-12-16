import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubecerciseComponent } from './subecercise.component';

describe('SubecerciseComponent', () => {
  let component: SubecerciseComponent;
  let fixture: ComponentFixture<SubecerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubecerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubecerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
