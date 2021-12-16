import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedistributorComponent } from './updatedistributor.component';

describe('UpdatedistributorComponent', () => {
  let component: UpdatedistributorComponent;
  let fixture: ComponentFixture<UpdatedistributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedistributorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
