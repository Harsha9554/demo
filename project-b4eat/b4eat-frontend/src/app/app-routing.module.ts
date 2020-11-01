import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { NewRestaurantComponent } from './pages/new-restaurant/new-restaurant.component';

const routes: Routes = [
  { path: '', component: PortalViewComponent },
  { path: 'new-restaurant', component: NewRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
