import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WhHomeComponent } from './wh-home/wh-home.component';
import { WhNavbarComponent } from './wh-navbar/wh-navbar.component';
import { MatSharedModule } from '../shared/mat-shared.module';
import { WhProfileComponent } from './wh-profile/wh-profile.component';
import { WhAddStockComponent } from './wh-add-stock/wh-add-stock.component';
import { WhOrdersComponent } from './wh-orders/wh-orders.component';


@NgModule({
  declarations: [
    WhHomeComponent,
    WhNavbarComponent,
    WhProfileComponent,
    WhAddStockComponent,
    WhOrdersComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    MatSharedModule
  ]
})
export class WarehouseModule { }
