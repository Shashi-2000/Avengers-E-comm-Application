import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-raise-order',
  templateUrl: './raise-order.component.html',
  styleUrls: ['./raise-order.component.scss']
})
export class RaiseOrderComponent implements OnInit {

  raisePOForm !: FormGroup;
  orderDetails : any;
  baseUrlForOrder : string = 'https://localhost:44321/api/Distributer/Order'

  constructor(
    private dialogRef : MatDialogRef<RaiseOrderComponent>,
    private fb : FormBuilder,
    private apiService : ApiServiceService,
    @Inject(MAT_DIALOG_DATA) private data : any
    ) { }

  ngOnInit(): void {
    this.raisePOForm = this.fb.group({
      OrderPlacedDate : [new Date],
      OrderID : [''],
      ProductID : [''],
      ProductName : [''],
      Quantity : [''],
      UnitPrice : [''],
      ShippingCost : [''],
      taxes : [''],
      TotalCost : [''],
      DistributerID : Number(localStorage.getItem('userID'))
    })

    this.raisePOForm.patchValue({
      OrderPlacedDate : new Date,
      OrderID : Math.floor(1000 + Math.random() * 9000),
      ProductID : this.data.product.ProductID,
      ProductName : this.data.product.Name,
      Quantity : this.data.qty,
      UnitPrice : this.data.product.UnitPrice,
      ShippingCost : (Number(this.data.product.UnitPrice) * this.data.qty * 0.02).toFixed(2) ,
      taxes : Number(this.data.product.UnitPrice) * this.data.qty * 0.07,
      TotalCost : ((this.data.qty * this.data.product.UnitPrice) + (Number(this.data.product.UnitPrice) * this.data.qty * 0.02) + Number(this.data.product.UnitPrice) * this.data.qty * 0.07).toFixed(2),
    })
  }

  onClickConfirmOrder(){
    console.log(this.raisePOForm.value)
    this.apiService.postMethod(this.baseUrlForOrder , this.raisePOForm.value).subscribe({ next : () => {
      this.dialogRef.close();
    }})
  }

  onClickClose(){
    this.dialogRef.close();
  }
}
