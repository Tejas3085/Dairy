import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrghrdetailsComponent } from './orghrdetails.component';

describe('OrghrdetailsComponent', () => {
  let component: OrghrdetailsComponent;
  let fixture: ComponentFixture<OrghrdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrghrdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrghrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
