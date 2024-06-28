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
} from "./clinic-requirements-registration-form/clinic-requirements-registration-form.component"; // Assuming you have a HomeComponent

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent } ,
  { path: 'register-clinic', component: ClinicRegistrationFormComponent },
  { path: 'register-clinic-address', component: ClinicAddressRegistrationFormComponent},
  { path: 'practice-details-registration', component: ClinicPracticeDetailsRegistrationFormComponent},
  { path: 'payment-registration', component: ClinicPaymentMethodRegistrationFormComponent },
  { path: 'register-requirement', component:ClinicRequirementsRegistrationFormComponent}
];
