import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {

  constructor(private restaurantService :RestaurantService) { }

  ngOnInit(): void {
  }

  createRestaurant(title: string) {
    this.restaurantService.createRestaurant(title).subscribe((response : any)=>{
      console.log(response);
    })
  }

}
