import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-clinic-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './clinic-registration-form.component.html',
  styleUrls: ['./clinic-registration-form.component.scss']
})
export class ClinicRegistrationFormComponent {
  clinicForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobilePhone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{10}')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.clinicForm.valid) {
      this.http.post('http://localhost:8080/registerclinic', this.clinicForm.value)
        .subscribe({
          next: (response) => console.log('Clinic registered successfully!', response),
          error: (error) => console.error('Error registering clinic', error)
        });
    }
  }
}
