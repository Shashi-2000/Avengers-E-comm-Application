import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistNavbarComponent } from './dist-navbar/dist-navbar.component';
import { MyProfileDistComponent } from './my-profile-dist/my-profile-dist.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [

  { path : '', component : ProductsComponent },
  { path : 'stock', component : StockComponent },
  { path:'purchase', component:PurchaseorderComponent },
  { path : 'profile', component : MyProfileDistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributerRoutingModule { }
