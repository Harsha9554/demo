import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { NewRestaurantComponent } from './pages/new-restaurant/new-restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full'},
  { path: 'new-restaurant', component: NewRestaurantComponent},
  { path: 'restaurants', component: PortalViewComponent},
  { path: 'restaurants/:restId', component: PortalViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
