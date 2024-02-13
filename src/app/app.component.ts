import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ExpensesCardComponent } from './expenses-card/expenses-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavbarComponent, ExpensesCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FinPro';
}
