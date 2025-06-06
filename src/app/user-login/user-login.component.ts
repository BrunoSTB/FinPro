import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  credentials = {
    username: '',
    password: ''
  }

  onSubmit() {
    console.log('login submitted: ', this.credentials);
  }
}
