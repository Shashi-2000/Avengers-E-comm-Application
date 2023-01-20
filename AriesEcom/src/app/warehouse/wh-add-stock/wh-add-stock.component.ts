import { Component, Inject, OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-wh-add-stock',
  templateUrl: './wh-add-stock.component.html',
  styleUrls: ['./wh-add-stock.component.scss']
})
export class WhAddStockComponent implements OnInit {

  addStockURL : string = 'https://localhost:44321/api/Warehouse/addStock';
  addStockQtyUrl : string = 'https://localhost:44321/api/Warehouse/addStockQty';
  getQtyUrl : string = 'https://localhost:44321/api/Warehouse/getqty';
  updateStockUrl : string = 'https://localhost:44321/api/Warehouse/updateStock';
  updateStockQtyUrl :string = 'https://localhost:44321/api/Warehouse/updateStockQty';
  addStockForm : any | undefined;

  constructor(
    private fb : FormBuilder,
    private apiService : ApiServiceService,
    private dialogRef : MatDialogRef<WhAddStockComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any
  ) { }

  ngOnInit(): void {
    // this.apiService.getMethod(`${this.getQtyUrl}/${this.data.ProductID}`).subscribe((qty : any) => {
    //   this.addStockForm.patchValue({
    //     InventoryQuantity : qty
    //   })
    // })
    if(this.data){
      this.addStockForm = this.fb.group({
        ProductID : [this.data.ProductID],
        ProductCategoryID : [this.data.ProductCategoryID],
        Name : [this.data.Name],
        UnitPrice : [this.data.UnitPrice],
        Description : [this.data.Description],
        ImageURL : [this.data.ImageURL],
        Weight : [this.data.Weight],
        TaxPrice : [this.data.TaxPrice],
        InventoryQuantity : [],
        ExpirationDate : [this.data.ExpirationDate],
      });

      this.apiService.getMethod(`${this.getQtyUrl}/${this.data.ProductID}`).subscribe((qty : any) => {
        this.addStockForm.patchValue({
          InventoryQuantity : qty
        })
      })

    } else {
      this.addStockForm = this.fb.group({
        ID : Math.ceil(Math.random() * 10000 - 1),
        DateInserted : new Date(),
        MARKETID : Math.ceil(Math.random() * 100000 - 1),
        ProductID : [],
        ProductCategoryID : [],
        Name : [],
        UnitPrice : [],
        Description : [],
        ImageURL : [],
        Weight : [],
        TaxPrice : [],
        InventoryQuantity : [],
        ExpirationDate : [],
        MinimumOrderDty : Math.ceil(Math.random() * 60)
      })
    }
  }

  onClickAddStock(){
    let productInventory = {
      ProductID : this.addStockForm.value.ProductID,
      InventoryQuantity : this.addStockForm.value.InventoryQuantity,
      InventoryQuantityUpdatedDate : new Date()
    }
    if(this.data){
      this.apiService.postMethod(this.updateStockUrl, this.addStockForm.value).subscribe(e => {console.log(e)});
      this.apiService.postMethod(this.updateStockQtyUrl, productInventory).subscribe((e) => {
        console.log(e);
        this.dialogRef.close();
      })
    } else {
      // let productInventory = {
      //   ProductID : this.addStockForm.value.ProductID,
      //   InventoryQuantity : this.addStockForm.value.InventoryQuantity,
      //   InventoryQuantityUpdatedDate : new Date()
      // }
      this.apiService.postMethod(this.addStockURL, this.addStockForm.value).subscribe()
      this.apiService.postMethod(this.addStockQtyUrl, productInventory).subscribe(() => {
        this.dialogRef.close()
      })
    }
  }

  onClickClose(){
    this.dialogRef.close()
  }
}
