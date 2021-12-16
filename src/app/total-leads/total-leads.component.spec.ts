import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLeadsComponent } from './total-leads.component';

describe('TotalLeadsComponent', () => {
  let component: TotalLeadsComponent;
  let fixture: ComponentFixture<TotalLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalLeadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
