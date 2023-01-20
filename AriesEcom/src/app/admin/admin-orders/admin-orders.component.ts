import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/api-service.service';
import { AuPurchaseOrderComponent } from 'src/app/authorizer/au-purchase-order/au-purchase-order.component';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  POBaseUrl : string = `https://localhost:44321/api/Authorizer/pos/${this.data}`;
  purchaseOrders : any;

  constructor(
    private apiService : ApiServiceService,
    private dialogRef : MatDialogRef<AuPurchaseOrderComponent>,
    @Inject(MAT_DIALOG_DATA) private data : string,
    private spinnerService : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.show();
    this.apiService.getMethod(this.POBaseUrl).subscribe((orders : any) => {
      setTimeout(() => {
        this.purchaseOrders = orders
        this.spinnerService.hide();
      }, 1000)
    })
  }

  onClickClose(){
    this.dialogRef.close();
  }
}
