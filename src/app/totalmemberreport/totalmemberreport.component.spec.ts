import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalmemberreportComponent } from './totalmemberreport.component';

describe('TotalmemberreportComponent', () => {
  let component: TotalmemberreportComponent;
  let fixture: ComponentFixture<TotalmemberreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalmemberreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalmemberreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
