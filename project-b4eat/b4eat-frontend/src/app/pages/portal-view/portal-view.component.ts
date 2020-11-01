import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-portal-view',
  templateUrl: './portal-view.component.html',
  styleUrls: ['./portal-view.component.scss']
})
export class PortalViewComponent implements OnInit {

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
  }

}
