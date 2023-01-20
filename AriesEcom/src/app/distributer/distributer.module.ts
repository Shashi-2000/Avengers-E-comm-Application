import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DistributerRoutingModule } from './distributer-routing.module';
import { MyProfileDistComponent } from './my-profile-dist/my-profile-dist.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ProductsComponent } from './products/products.component';
import {MatIconModule} from '@angular/material/icon';
import { StockComponent } from './stock/stock.component';
import { SharedModule } from '../shared/shared.module';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { DistNavbarComponent } from './dist-navbar/dist-navbar.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RaiseOrderComponent } from './raise-order/raise-order.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgxSpinnerModule } from 'ngx-spinner';





@NgModule({
  declarations: [
    MyProfileDistComponent,
    ProductsComponent,
    StockComponent,
    PurchaseorderComponent,
    DistNavbarComponent,
    RaiseOrderComponent
  ],
  imports: [
    CommonModule,
    DistributerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    SharedModule
  ],
  providers : [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class DistributerModule { }
