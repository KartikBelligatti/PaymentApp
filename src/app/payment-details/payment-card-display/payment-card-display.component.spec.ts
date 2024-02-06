import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardDisplayComponent } from './payment-card-display.component';

describe('PaymentCardDisplayComponent', () => {
  let component: PaymentCardDisplayComponent;
  let fixture: ComponentFixture<PaymentCardDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCardDisplayComponent]
    });
    fixture = TestBed.createComponent(PaymentCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
