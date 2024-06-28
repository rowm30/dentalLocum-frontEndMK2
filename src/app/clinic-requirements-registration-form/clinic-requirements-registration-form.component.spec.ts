import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicRequirementsRegistrationFormComponent } from './clinic-requirements-registration-form.component';

describe('ClinicRequirementsRegistrationFormComponent', () => {
  let component: ClinicRequirementsRegistrationFormComponent;
  let fixture: ComponentFixture<ClinicRequirementsRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicRequirementsRegistrationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicRequirementsRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
