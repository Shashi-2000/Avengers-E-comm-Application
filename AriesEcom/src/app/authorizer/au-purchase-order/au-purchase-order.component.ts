import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/api-service.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-au-purchase-order',
  templateUrl: './au-purchase-order.component.html',
  styleUrls: ['./au-purchase-order.component.scss']
})
export class AuPurchaseOrderComponent implements OnInit {

  POBaseUrl : string = `https://localhost:44321/api/Authorizer/pos/${this.data}`;
  orderStatusUrl : string = `https://localhost:44321/api/Authorizer/AR`;
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
        this.purchaseOrders = orders.filter((e : string | any) => e.OrderStatus === 'Pending')
        this.spinnerService.hide();
      }, 1000)
    })
  }

  onClickAccept(OrderID : string){
    console.log(`${this.orderStatusUrl}/${OrderID}/true/${this.data}`)
    this.apiService.getMethod(`${this.orderStatusUrl}/${OrderID}/true/${this.data}`).subscribe(e => {
    });
    this.spinnerService.show();
    setTimeout(() => {
      this.ngOnInit();
      this.spinnerService.hide()
    }, 1000);
  }

  onClickReject(OrderID : string){
    console.log(`${this.orderStatusUrl}/${OrderID}/false/${this.data}`)
    this.apiService.getMethod(`${this.orderStatusUrl}/${OrderID}/false/${this.data}`).subscribe(e => {
    });
    this.spinnerService.show();
    setTimeout(() => {
      this.ngOnInit();
      this.spinnerService.hide()
    }, 1000);
  }
  
  onClickClose(){
    this.dialogRef.close();
  }
}
