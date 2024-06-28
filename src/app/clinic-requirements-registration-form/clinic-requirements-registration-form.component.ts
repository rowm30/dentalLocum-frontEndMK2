import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clinic-requirements-registration-form',
  templateUrl: './clinic-requirements-registration-form.component.html',
  styleUrls: ['./clinic-requirements-registration-form.component.scss'],
  imports: [HttpClientModule, ReactiveFormsModule],
  standalone: true
})
export class ClinicRequirementsRegistrationFormComponent {
  requirementsForm: FormGroup;

  constructor(private http: HttpClient) {
    this.requirementsForm = new FormGroup({
      clinicId: new FormControl('', Validators.required),
      locumType: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      hourlyRate: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    const url = 'http://localhost:8080/requirements';
    this.http.post(url, {
      clinic: { id: this.requirementsForm.value.clinicId },
      locumType: this.requirementsForm.value.locumType,
      startTime: this.requirementsForm.value.startTime,
      endTime: this.requirementsForm.value.endTime,
      day: this.requirementsForm.value.day,
      hourlyRate: this.requirementsForm.value.hourlyRate
    }).subscribe({
      next: (response) => console.log('Success!', response),
      error: (error) => console.error('Error!', error)
    });
  }
}
