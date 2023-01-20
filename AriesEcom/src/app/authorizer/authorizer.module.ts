import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuProfileComponent } from './au-profile/au-profile.component';
import { AuHomeComponent } from './au-home/au-home.component';
import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuNavbarComponent } from './au-navbar/au-navbar.component';
import { MatSharedModule } from '../shared/mat-shared.module';
import { SharedModule } from '../shared/shared.module';
import { AuPurchaseOrderComponent } from './au-purchase-order/au-purchase-order.component';



@NgModule({
  declarations: [
    AuProfileComponent,
    AuHomeComponent,
    AuNavbarComponent,
    AuPurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,
    MatSharedModule
  ]
})
export class AuthorizerModule { }
