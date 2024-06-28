import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-clinic-address-registration-form',
  templateUrl: './clinic-address-registration-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  styleUrls: ['./clinic-address-registration-form.component.scss']
})
export class ClinicAddressRegistrationFormComponent {
  addressForm: FormGroup;

  constructor(private http: HttpClient) {
    this.addressForm = new FormGroup({
      line1: new FormControl('', Validators.required),
      line2: new FormControl(''),
      town: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
      clinicId: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const url = 'http://localhost:8080/clinicaddresses';
    this.http.post(url, {
      line1: this.addressForm.value.line1,
      line2: this.addressForm.value.line2,
      town: this.addressForm.value.town,
      postcode: this.addressForm.value.postcode,
      clinic: { id: this.addressForm.value.clinicId }
    }).subscribe({
      next: (response) => console.log('Success!', response),
      error: (error) => console.error('Error!', error)
    });
  }
}
