import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCategoryListComponent } from './business-category-list.component';

describe('BusinessCategoryListComponent', () => {
  let component: BusinessCategoryListComponent;
  let fixture: ComponentFixture<BusinessCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
