import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  
  menuData =  {
    restaurantName: "Turkish Delight",
    imageUrl: "../../../assets/images/ali-inay-y3aP9oo9Pjc-unsplash.jpg", // Ensure this path is correct
    menu: {
      coldAppetizers: [
        { name: "Humus", price: "₺" },
        { name: "Cacık", price: "₺" }
      ],
      hotAppetizers: [
        { name: "Sigara Börek", description: "Cigar Borek - Thin Pastry", price: "₺" }
      ],
      mainCourses: [
        { name: "Adana Kebap", price: "₺" },
        { name: "Tavuk Döner", description: "Chicken Döner", price: "₺" },
        { name: "Pide Kaşarlı", description: "Pide with Cheese", price: "₺" }
      ],
      desserts: [
        { name: "Baklava", price: "₺" }
      ],
      drinks: [
        { name: "Türk Kahvesi", price: "₺" },
        { name: "Ayran", price: "₺" }
      ]
    }
  };


}