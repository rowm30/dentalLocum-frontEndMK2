import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic-practice-details-registration-form',
  templateUrl: './clinic-practice-details-registration-form.component.html',
  styleUrls: ['./clinic-practice-details-registration-form.component.scss'],
  imports: [HttpClientModule, ReactiveFormsModule, MatSnackBarModule], // Ensure MatSnackBar is imported
  standalone: true
})
export class ClinicPracticeDetailsRegistrationFormComponent {
  detailsForm: FormGroup;

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
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

  formatDuration(duration: string): string {
    const hours = Math.floor(+duration);
    const minutes = Math.floor((+duration - hours) * 60);
    return `PT${hours}H${minutes}M`;
  }

  onSubmit() {
    const durationISO = this.formatDuration(this.detailsForm.value.lunchDuration);
    const url = 'http://localhost:8080/practicedetails';
    this.http.post(url, {
      practiceName: this.detailsForm.value.practiceName,
      practiceType: this.detailsForm.value.practiceType,
      corporateOrIndependent: this.detailsForm.value.corporateOrIndependent,
      arriveBy: this.detailsForm.value.arriveBy,
      leaveAt: this.detailsForm.value.leaveAt,
      lunchDuration: durationISO,
      clinic: { id: this.detailsForm.value.clinicId }
    }).subscribe({
      next: (response) => {
        console.log('Practice details registered successfully!', response);
        this.snackBar.open('Practice details registered successfully!', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
        // Navigate with a delay to show the snackbar before navigating
        setTimeout(() => {
          this.router.navigate(['/payment-registration']); // Update this with your actual route
        }, 3200); // slightly longer than the snackbar
      },
      error: (error) => {
        console.error('Error registering practice details', error);
        this.snackBar.open('Error registering practice details: ' + error.message, 'Close', {
          duration: 3000
        });
      }
    });
  }
}
