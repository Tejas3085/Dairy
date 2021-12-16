import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentslipComponent } from './paymentslip.component';

describe('PaymentslipComponent', () => {
  let component: PaymentslipComponent;
  let fixture: ComponentFixture<PaymentslipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentslipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
