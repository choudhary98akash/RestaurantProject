import { AfterViewChecked, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { data } from '../../menu-data';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent{
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
throw new Error('Method not implemented.');
}

  


}