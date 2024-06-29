import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DatePipe, NgForOf} from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clinic-dashboard',
  templateUrl: './clinic-dashboard.component.html',
  styleUrls: ['./clinic-dashboard.component.scss'],
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ]
})
export class ClinicDashboardComponent {
  // Mock data for the requirements

  requirements = [
    { id: 1, day: 'Monday', endTime: '17:00', hourlyRate: 50, locumType: 'Dentist', startTime: '08:00', clinicId: 1 },
    { id: 2, day: 'Monday', endTime: '17:00', hourlyRate: 50, locumType: 'Dentist', startTime: '08:00', clinicId: 1 },
    { id: 3, day: 'Wednesday', endTime: '09:09', hourlyRate: 5, locumType: 'Nurse', startTime: '06:03', clinicId: 1 },
    { id: 4, day: 'Wednesday', endTime: '09:09', hourlyRate: 5, locumType: 'Nurse', startTime: '06:03', clinicId: 1 },
    { id: 5, day: 'Wednesday', endTime: '09:09', hourlyRate: 5, locumType: 'Nurse', startTime: '06:03', clinicId: 1 },
  ];

  constructor(private router: Router) {
    console.log(this.requirements);
  }

  viewProfile() {
    // Navigate to the profile view component
    this.router.navigate(['/clinic-profile']);
  }

  registerNewRequirement() {
    // Navigate to the component to add a new requirement
    this.router.navigate(['/register-requirement']);
  }


}
