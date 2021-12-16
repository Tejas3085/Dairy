import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnizationTypesListComponent } from './orgnization-types-list.component';

describe('OrgnizationTypesListComponent', () => {
  let component: OrgnizationTypesListComponent;
  let fixture: ComponentFixture<OrgnizationTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgnizationTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnizationTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
