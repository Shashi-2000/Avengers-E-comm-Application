import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MatSharedModule } from '../shared/mat-shared.module';
import { AdminStockComponent } from './admin-stock/admin-stock.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminBlockEmpComponent } from './admin-block-emp/admin-block-emp.component';
import { AdminAllordersComponent } from './admin-allorders/admin-allorders.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminStockComponent,
    AdminOrdersComponent,
    AdminBlockEmpComponent,
    AdminAllordersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSharedModule
  ]
})
export class AdminModule { }
