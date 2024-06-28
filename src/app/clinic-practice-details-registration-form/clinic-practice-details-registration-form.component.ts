import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clinic-practice-details-registration-form',
  templateUrl: './clinic-practice-details-registration-form.component.html',
  styleUrls: ['./clinic-practice-details-registration-form.component.scss'],
  imports: [HttpClientModule, ReactiveFormsModule],
  standalone: true
})
export class ClinicPracticeDetailsRegistrationFormComponent {
  detailsForm: FormGroup;

  constructor(private http: HttpClient) {
    this.detailsForm = new FormGroup({
      practiceName: new FormControl('', Validators.required),
      practiceType: new FormControl('', Validators.required),
      corporateOrIndependent: new FormControl('', Validators.required),
      arriveBy: new FormControl('', Validators.required),
      leaveAt: new FormControl('', Validators.required),
      lunchDuration: new FormControl('', Validators.required),
      clinicId: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const url = 'http://localhost:8080/practicedetails';
    this.http.post(url, {
      practiceName: this.detailsForm.value.practiceName,
      practiceType: this.detailsForm.value.practiceType,
      corporateOrIndependent: this.detailsForm.value.corporateOrIndependent,
      arriveBy: this.detailsForm.value.arriveBy,
      leaveAt: this.detailsForm.value.leaveAt,
      lunchDuration: `PT${this.detailsForm.value.lunchDuration}H`, // Ensuring duration is formatted correctly
      clinic: { id: this.detailsForm.value.clinicId }
    }).subscribe({
      next: (response) => console.log('Success!', response),
      error: (error) => console.error('Error!', error)
    });
  }
}
