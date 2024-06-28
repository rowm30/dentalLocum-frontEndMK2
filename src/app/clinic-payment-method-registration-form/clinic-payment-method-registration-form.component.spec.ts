import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPaymentMethodRegistrationFormComponent } from './clinic-payment-method-registration-form.component';

describe('ClinicPaymentMethodRegistrationFormComponent', () => {
  let component: ClinicPaymentMethodRegistrationFormComponent;
  let fixture: ComponentFixture<ClinicPaymentMethodRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicPaymentMethodRegistrationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicPaymentMethodRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
