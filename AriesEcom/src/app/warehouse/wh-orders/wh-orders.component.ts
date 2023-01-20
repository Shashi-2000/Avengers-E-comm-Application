import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-wh-orders',
  templateUrl: './wh-orders.component.html',
  styleUrls: ['./wh-orders.component.scss']
})
export class WhOrdersComponent implements OnInit {

  getOrdersUrl : string = 'https://localhost:44321/api/Distributer/getOrders';
  dispatchUrl : string = 'https://localhost:44321/api/Warehouse/dispatch';
  addtoDistStock : string = `https://localhost:44321/api/Warehouse/AddDistStock`;
  matOrders = new MatTableDataSource();
  displayedColumns : string[] = ['OrderID', 'OrderPlacedDate', 'ProductName', 'ProductID', 'Quantity', 'TotalCost', 'OrderStatus', 'Dispatch'];
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private apiService : ApiServiceService,
    private spinnerService : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.apiService.getMethod(this.getOrdersUrl).subscribe((orders : any) => {
      this.spinnerService.show();
      let filtered : any = orders.filter((e : string | any) => e.OrderStatus === 'Accepted' || e.OrderStatus == 'Dispatched')
      setTimeout(() => {
        this.matOrders = new MatTableDataSource(filtered);
        this.matOrders.paginator = this.paginator;
        this.matOrders.sort = this.sort;
        this.spinnerService.hide()
      }, 900);
    })
  }

  onClickDispatch(orderID : string, orderDet : any){
    this.spinnerService.show()
    this.apiService.getMethod(`${this.dispatchUrl}/${orderID}`).subscribe();
    this.apiService.postMethod(this.addtoDistStock, orderDet).subscribe((e) => {
      setTimeout(() => {
        this.ngOnInit();
        this.spinnerService.hide()
      }, 1000);
    }
    );
  }

}
