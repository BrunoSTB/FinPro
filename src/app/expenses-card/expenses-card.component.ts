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
  expensesList = [...expenses];

  getSum() {
    let sum: number = 0;
    this.expensesList.forEach(a => sum += a.value);
    return Math.round((sum + Number.EPSILON) * 100) / 100;
  }

  clearExpenseList() {
    this.expensesList = [];
  }

  removeExpense(expenseId: number) {
    this.expensesList = this.expensesList.filter(x => x.id !== expenseId);
    console.log('foi');
  }


}
