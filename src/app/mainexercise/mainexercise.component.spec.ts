import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainexerciseComponent } from './mainexercise.component';

describe('MainexerciseComponent', () => {
  let component: MainexerciseComponent;
  let fixture: ComponentFixture<MainexerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainexerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
