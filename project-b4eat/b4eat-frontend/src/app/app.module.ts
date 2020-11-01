import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NewRestaurantComponent } from './pages/new-restaurant/new-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalViewComponent,
    NewRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
