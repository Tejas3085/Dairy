import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrgnizationTypeComponent } from './update-orgnization-type.component';

describe('UpdateOrgnizationTypeComponent', () => {
  let component: UpdateOrgnizationTypeComponent;
  let fixture: ComponentFixture<UpdateOrgnizationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrgnizationTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrgnizationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
