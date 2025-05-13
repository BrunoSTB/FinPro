import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router'

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  links = [
    { path: '/signup', label: 'Sign Up' },
    { path: '/login', label: 'Login' },
    { path: '/expenses', label: 'Expenses' },
    { path: '/', label: 'Home' },
  ];
}

