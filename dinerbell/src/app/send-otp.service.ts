import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { response } from 'express';
import axios from 'axios';
import { PopupService } from './pop-up-service.service';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private apiUrl ='http://localhost:3000/sendOtp';

  constructor(
    popUpService : PopupService
  ) { }


  async sendOTP(email : string): Promise <any |undefined>{
    try {
      const response = await axios.post(this.apiUrl,{email : email});
      return response.data.otp;
    } catch (error) {
      console.log('Error sending otp');
      return undefined;
    }
      
  }
}
