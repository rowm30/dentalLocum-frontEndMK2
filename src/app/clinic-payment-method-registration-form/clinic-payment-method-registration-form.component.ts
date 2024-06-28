import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clinic-payment-method-registration-form',
  templateUrl: './clinic-payment-method-registration-form.component.html',
  styleUrls: ['./clinic-payment-method-registration-form.component.scss'],
  imports: [HttpClientModule, ReactiveFormsModule],
  standalone: true
})
export class ClinicPaymentMethodRegistrationFormComponent {
  paymentForm: FormGroup;

  constructor(private http: HttpClient) {
    this.paymentForm = new FormGroup({
      methodType: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      clinicId: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const url = 'http://localhost:8080/paymentmethods';
    this.http.post(url, {
      methodType: this.paymentForm.value.methodType,
      details: this.paymentForm.value.details,
      clinic: { id: this.paymentForm.value.clinicId }
    }).subscribe({
      next: (response) => console.log('Success!', response),
      error: (error) => console.error('Error!', error)
    });
  }
}
