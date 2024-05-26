import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OtpService } from '../send-otp.service';
import { PopupService } from '../pop-up-service.service';
import { Route,Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

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
  codeGenerated = '';
  isEmailValid = false;
  isOtpValid = false;
  disableSendOTP = false;

  disableSendButton(){
    this.disableSendOTP = false;
  }
  enableSendButton(){
    this.disableSendOTP = true;
  }


  constructor (
   private otpService : OtpService,
   private popUpService : PopupService,
   private route : Router
  ){}


  verify() {
      if(!this.isValidOTP(this.codeGenerated)){
          alert('Not a valid OTP');
      }else if( this.codeGenerated.toString() !== this.otp){
          alert("Otp doesn't match.");
      }else{
          this.route.navigate(['/home']);
      }
  }
  async sendOTP(){

    setTimeout(()=>{
      this.disableSendButton();
    },10000);
    if(this.isValidEmail(this.email)){
      const response =  await this.otpService.sendOTP(this.email).then((response)=>{
        console.log(response);
        alert('OTP has been sent successfully.')
        this.codeGenerated = response;
        this.enableSendButton();
      }).catch(error=>{
        alert('ERROR EHILE SENDING OTP');
      })
      
    }
    else{
      alert('Not a valid Email.Please try again.');
    }
      
  }


  showLogin(){
    this.login = true;
  }

  isValidOTP(otp: string): boolean {
    const otpRegex = /^\d{6}$/;
    return otpRegex.test(otp);
  }

isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

  



}
