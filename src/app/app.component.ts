import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ExpensesCardComponent } from './expenses-card/expenses-card.component';
import { ExpensesDashboardComponent } from './expenses-dashboard/expenses-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TopNavbarComponent, 
    ExpensesCardComponent, 
    ExpensesDashboardComponent, 
    UserLoginComponent,
    UserSignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinPro';
}
