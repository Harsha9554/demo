import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private webReqService: WebRequestService) { }

  createRestaurant(title : string) {
    return this.webReqService.post('restaurants', {title});
  }

  getRestaurants(){
    return this.webReqService.get('restaurants');
  }
}
