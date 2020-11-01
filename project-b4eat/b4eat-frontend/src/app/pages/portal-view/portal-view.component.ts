import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-portal-view',
  templateUrl: './portal-view.component.html',
  styleUrls: ['./portal-view.component.scss']
})
export class PortalViewComponent implements OnInit {

  restaurants: any[];
  reviews: any[];
  constructor(private restaurantService : RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.restaurantService.getReviews(params.restId).subscribe((reviews: any[])=>{
          this.reviews = reviews;
        })
      }


    )

    this.restaurantService.getRestaurants().subscribe((restaurants : any[])=>{
      this.restaurants = restaurants;
    })
  }

}
