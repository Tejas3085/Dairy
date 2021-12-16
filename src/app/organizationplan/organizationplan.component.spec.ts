import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationplanComponent } from './organizationplan.component';

describe('OrganizationplanComponent', () => {
  let component: OrganizationplanComponent;
  let fixture: ComponentFixture<OrganizationplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
