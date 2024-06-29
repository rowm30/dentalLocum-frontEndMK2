import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ClinicRegistrationFormComponent} from "./clinic-registration-form/clinic-registration-form.component";
import {
  ClinicAddressRegistrationFormComponent
} from "./clinic-address-registration-form/clinic-address-registration-form.component";
import {
  ClinicPracticeDetailsRegistrationFormComponent
} from "./clinic-practice-details-registration-form/clinic-practice-details-registration-form.component";
import {
  ClinicPaymentMethodRegistrationFormComponent
} from "./clinic-payment-method-registration-form/clinic-payment-method-registration-form.component";
import {
  ClinicRequirementsRegistrationFormComponent
} from "./clinic-requirements-registration-form/clinic-requirements-registration-form.component";
import {ClinicDashboardComponent} from "./clinic-dashboard/clinic-dashboard.component"; // Assuming you have a HomeComponent

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { animation: 'LoginPage' } },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'register-clinic', component: ClinicRegistrationFormComponent, data: { animation: 'ClinicFormPage' } },
  { path: 'register-clinic-address', component: ClinicAddressRegistrationFormComponent, data: { animation: 'ClinicAddressPage' }},
  { path: 'practice-details-registration', component: ClinicPracticeDetailsRegistrationFormComponent, data: { animation: 'PracticeDetailsPage' }},
  { path: 'payment-registration', component: ClinicPaymentMethodRegistrationFormComponent, data: { animation: 'PaymentMethodPage' }},
  { path: 'register-requirement', component: ClinicRequirementsRegistrationFormComponent, data: { animation: 'RequirementPage' }},
  { path: 'clinic-dashboard', component: ClinicDashboardComponent, data: { animation: 'ClinicDashboardPage' }},
];
