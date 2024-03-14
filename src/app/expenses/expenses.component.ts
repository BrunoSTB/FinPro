import { Component } from '@angular/core';
import { ExpensesCardComponent } from '../expenses-card/expenses-card.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpensesCardComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {

}
