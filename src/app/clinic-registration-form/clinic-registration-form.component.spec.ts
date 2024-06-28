import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicRegistrationFormComponent } from './clinic-registration-form.component';

describe('ClinicRegistrationFormComponent', () => {
  let component: ClinicRegistrationFormComponent;
  let fixture: ComponentFixture<ClinicRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicRegistrationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
