import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymprofileComponent } from './gymprofile.component';

describe('GymprofileComponent', () => {
  let component: GymprofileComponent;
  let fixture: ComponentFixture<GymprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
