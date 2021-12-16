import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicationDetailsComponent } from './update-application-details.component';

describe('UpdateApplicationDetailsComponent', () => {
  let component: UpdateApplicationDetailsComponent;
  let fixture: ComponentFixture<UpdateApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
