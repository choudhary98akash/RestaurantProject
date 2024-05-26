import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  login = false;
  email = '';
  otp = '';
  isEmailValid = false;
  isOtpValid = false;


  constructor (
  ){}


  verify() {
  // throw new Error('Method not implemented.');
  }
  sendOTP(){
    
  }


  showLogin(){
    this.login = true;
  }



}
