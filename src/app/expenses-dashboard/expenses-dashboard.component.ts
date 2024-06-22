import { Component } from '@angular/core';
import { ExpensesCardComponent } from '../expenses-card/expenses-card.component';

@Component({
  selector: 'app-expenses-dashboard',
  standalone: true,
  imports: [ExpensesCardComponent],
  templateUrl: './expenses-dashboard.component.html',
  styleUrl: './expenses-dashboard.component.css'
})
export class ExpensesDashboardComponent {
  

  getMonths(){
    
  }
}
