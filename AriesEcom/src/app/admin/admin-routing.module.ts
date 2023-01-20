import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAllordersComponent } from './admin-allorders/admin-allorders.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminStockComponent } from './admin-stock/admin-stock.component';


const routes: Routes = [
  { path : '', component : AdminHomeComponent },
  { path : 'admin-stock', component : AdminStockComponent },
  { path : 'admin-allorders', component : AdminAllordersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
