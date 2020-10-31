import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalViewComponent } from './pages/portal-view/portal-view.component';

const routes: Routes = [
  { path: '', component: PortalViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
