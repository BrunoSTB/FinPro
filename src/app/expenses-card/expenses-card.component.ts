import { Component } from '@angular/core';
import { Expense, expenses } from '../types/expenses'
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';

@Component({
  selector: 'app-expenses-card',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ExpenseFormComponent],
  templateUrl: './expenses-card.component.html',
  styleUrl: './expenses-card.component.css'
})

export class ExpensesCardComponent {
  expensesList = [...expenses];
  currentDate: Date = new Date(2024, 1, 1);
  biggestId = this.getItemWithHighestId(); 
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  getItemWithHighestId(): number {
    if (this.expensesList.length === 0) {
      return 0;
    }
    return this.expensesList
      .reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
  }

  handleFormSubmit(formData: Expense) {
    if(formData.name.length > 0)
    {
      this.biggestId = formData.id;
      this.expensesList.push(formData);
    }
    this.toggleForm();
  }

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
  }
}
