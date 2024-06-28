import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPracticeDetailsRegistrationFormComponent } from './clinic-practice-details-registration-form.component';

describe('ClinicPracticeDetailsRegistrationFormComponent', () => {
  let component: ClinicPracticeDetailsRegistrationFormComponent;
  let fixture: ComponentFixture<ClinicPracticeDetailsRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicPracticeDetailsRegistrationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicPracticeDetailsRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
