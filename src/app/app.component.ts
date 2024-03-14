import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ExpensesCardComponent } from './expenses-card/expenses-card.component';
import { ExpensesComponent } from './expenses/expenses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavbarComponent, ExpensesCardComponent, ExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinPro';
}
