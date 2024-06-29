import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './clinic-registration-form.component.html',
  styleUrls: ['./clinic-registration-form.component.scss']
})
export class ClinicRegistrationFormComponent {
  clinicForm = new FormGroup({
    clinicName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobilePhone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{10}')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {}

  onSubmit(): void {
    if (this.clinicForm.valid) {
      this.http.post('http://localhost:8080/registerclinic', this.clinicForm.value)
        .subscribe({
          next: (response) => {
            console.log('Clinic registered successfully!', response);
            this.snackBar.open('Clinic registered successfully!', 'Close', {
              duration: 1000,
              panelClass: ['snackbar-success']
            });
            // Check if the navigation line is being hit
            console.log('Navigating to clinic address registration...');
            setTimeout(() => {
              this.router.navigate(['/register-clinic-address']).then(success => {
                console.log('Navigation success:', success);
              }, error => {
                console.log('Navigation error:', error);
              });
            }, 1200); // slightly longer than the snackbar
          },
          error: (error) => {
            console.error('Error registering clinic', error);
            this.snackBar.open('Error registering clinic: ' + error.message, 'Close', {
              duration: 2000
            });
          }
        });
    }
  }
}

  import { trigger, style, animate, transition } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('600ms', style({ opacity: 1 }))
    ])
  ]);
