import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructerComponent } from './instructer.component';

describe('InstructerComponent', () => {
  let component: InstructerComponent;
  let fixture: ComponentFixture<InstructerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
