import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionlistComponent } from './instructionlist.component';

describe('InstructionlistComponent', () => {
  let component: InstructionlistComponent;
  let fixture: ComponentFixture<InstructionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
