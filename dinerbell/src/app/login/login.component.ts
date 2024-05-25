import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
verify() {
throw new Error('Method not implemented.');
}
  login = false;
  email = '';
  otp = '';

  showLogin(){
    this.login = true;
  }



}
