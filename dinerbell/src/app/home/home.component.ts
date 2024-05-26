import { Component } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutUsComponent,RestaurantComponent,CommonModule,FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
showAboutUs() {
    this.restaurant = false;
}
showRestaurant() {
    this.restaurant = true;
}
  restaurant = true;
}
