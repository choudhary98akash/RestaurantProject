import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private snackBar: MatSnackBar) { }

  // Method to show popup with custom message
  showPopup(message: string): void {
    // Show Material Snackbar notification
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Positioning horizontally
      verticalPosition: 'top' // Positioning vertically
    });
  }

  // Other methods of your popup service...
}
