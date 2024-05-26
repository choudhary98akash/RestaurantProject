import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  reservation = {
    date: '',
    time: '',
    partySize: '',
    name: '',
    contact: '',
    specialRequests: ''
  };
  dates = ['2024-05-26', '2024-05-27', '2024-05-28'];  // Example dates
  times = ['18:00', '19:00', '20:00'];  // Example times
  partySizes = [1, 2, 3, 4, 5, 6,];  // Example party sizes
  confirmationMessage = '';

  constructor(private router: Router) { }

  onSubmit(form: any) {
    if (form.valid) {
      this.confirmationMessage = 'Reservation submitted successfully!';
      // Navigate to the restaurant route after a short delay to show the confirmation message
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      this.confirmationMessage = 'Please fill out all required fields.';
    }
  }
}
