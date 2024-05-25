import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormPageComponent } from './form-page/form-page.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormPageComponent,LandingPageComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = false;

  showLogin(){
    this.login = true;
  }



}
