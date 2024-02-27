import { Component } from '@angular/core';
import { Expense, expenses } from '../types/expenses'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-expenses-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './expenses-card.component.html',
  styleUrl: './expenses-card.component.css'
})
export class ExpensesCardComponent {
  _expenses = [...expenses];

  getSum() {
    let sum: number = 0;
    this._expenses.forEach(a => sum += a.value);
    return Math.round((sum + Number.EPSILON) * 100) / 100;
  }

  removeExpense(expenseId: number) {
    this._expenses = this._expenses.filter(x => x.id !== expenseId);
    console.log('foi');
  }


}
