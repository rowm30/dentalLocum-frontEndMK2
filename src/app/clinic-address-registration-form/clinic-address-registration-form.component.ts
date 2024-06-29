import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-address-registration-form',
  templateUrl: './clinic-address-registration-form.component.html',
  styleUrls: ['./clinic-address-registration-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule // Make sure MatSnackBar is imported in your component or parent module
  ]
})
export class ClinicAddressRegistrationFormComponent {
  addressForm: FormGroup;

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
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
      next: (response) => {
        console.log('Address registered successfully!', response);
        this.snackBar.open('Address registered successfully!', 'Close', {
          duration: 1000,
          panelClass: ['snackbar-success']
        });
        // Navigate to the next form after the snackbar message
        setTimeout(() => {
          this.router.navigate(['/practice-details-registration']);
        }, 1200); // slightly longer than the snackbar duration
      },
      error: (error) => {
        console.error('Error registering address', error);
        this.snackBar.open('Error registering address: ' + error.message, 'Close', {
          duration: 3000
        });
      }
    });
  }
}
