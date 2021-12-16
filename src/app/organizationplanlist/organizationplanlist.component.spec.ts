import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationplanlistComponent } from './organizationplanlist.component';

describe('OrganizationplanlistComponent', () => {
  let component: OrganizationplanlistComponent;
  let fixture: ComponentFixture<OrganizationplanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationplanlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationplanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
