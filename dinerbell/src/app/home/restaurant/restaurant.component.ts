import { AfterViewChecked, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { data } from '../../menu-data';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule,FormComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent{

  constructor(
    private route : Router
  ){}
  index = 0 ;
  menuData = data[this.index];


moveright() {
    this.index = (this.index+1)%data.length;
    this.menuData = data[this.index];
  }
  moveleft() {
    this.index = ((this.index-1)+data.length)%data.length;
    this.menuData = data[this.index];
}
form() {
  this.route.navigate(['/form']);
}

  


}