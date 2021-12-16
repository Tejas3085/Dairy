import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisedetailslistComponent } from './franchisedetailslist.component';

describe('FranchisedetailslistComponent', () => {
  let component: FranchisedetailslistComponent;
  let fixture: ComponentFixture<FranchisedetailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchisedetailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisedetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
