import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhHomeComponent } from './wh-home/wh-home.component';
import { WhOrdersComponent } from './wh-orders/wh-orders.component';
import { WhProfileComponent } from './wh-profile/wh-profile.component';

const routes: Routes = [
  { path : '', component : WhHomeComponent },
  { path : 'wh-profile', component : WhProfileComponent },
  { path : 'wh-orders', component : WhOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
