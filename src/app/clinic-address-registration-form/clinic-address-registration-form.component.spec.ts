import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAddressRegistrationFormComponent } from './clinic-address-registration-form.component';

describe('ClinicAddressRegistrationFormComponent', () => {
  let component: ClinicAddressRegistrationFormComponent;
  let fixture: ComponentFixture<ClinicAddressRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicAddressRegistrationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicAddressRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
