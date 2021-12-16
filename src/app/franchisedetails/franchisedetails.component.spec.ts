import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisedetailsComponent } from './franchisedetails.component';

describe('FranchisedetailsComponent', () => {
  let component: FranchisedetailsComponent;
  let fixture: ComponentFixture<FranchisedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchisedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
