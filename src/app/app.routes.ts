import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component'
import { UserSignupComponent } from './user-signup/user-signup.component'
import { ExpensesDashboardComponent } from './expenses-dashboard/expenses-dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent }, 
    { path: 'expenses', component: ExpensesDashboardComponent }, 
    { path: 'login', component: UserLoginComponent },
    { path: 'signup', component: UserSignupComponent },
];
