import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/api-service.service';
import { RaiseOrderComponent } from '../raise-order/raise-order.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.scss']
})
export class PurchaseorderComponent implements OnInit {

  urlToGetOrders : string = 'https://localhost:44321/api/Distributer/getOrders';
  displayedColumns : string[] = ['OrderPlacedDate', 'OrderID', 'ProductID','ProductName','UnitPrice','Quantity','ShippingCost','TotalCost','OrderStatus']
  matOrders = new MatTableDataSource();

  constructor(
    private apiService : ApiServiceService,
    private dialog : MatDialog
    ) { }

    @ViewChild(MatPaginator) paginator !: MatPaginator;
    @ViewChild(MatSort) matSort !: MatSort;

  ngOnInit(): void {
    this.apiService.getMethod(this.urlToGetOrders).subscribe((orders : any) => {
      this.matOrders = new MatTableDataSource(orders);
      this.matOrders.paginator = this.paginator;
      this.matOrders.sort = this.matSort;
      console.log(this.matOrders);
    })
  }

  onclickRaiseOrder(){
    this.dialog.open(RaiseOrderComponent, {
      height : '98%',
      width : '48%'
    })
  }
}
