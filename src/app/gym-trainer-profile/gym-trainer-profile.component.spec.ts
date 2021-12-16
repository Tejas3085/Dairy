import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymTrainerProfileComponent } from './gym-trainer-profile.component';

describe('GymTrainerProfileComponent', () => {
  let component: GymTrainerProfileComponent;
  let fixture: ComponentFixture<GymTrainerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymTrainerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymTrainerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
