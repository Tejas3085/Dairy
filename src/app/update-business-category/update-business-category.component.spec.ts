import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessCategoryComponent } from './update-business-category.component';

describe('UpdateBusinessCategoryComponent', () => {
  let component: UpdateBusinessCategoryComponent;
  let fixture: ComponentFixture<UpdateBusinessCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusinessCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
