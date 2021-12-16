import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepostjobComponent } from './updatepostjob.component';

describe('UpdatepostjobComponent', () => {
  let component: UpdatepostjobComponent;
  let fixture: ComponentFixture<UpdatepostjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepostjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepostjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
