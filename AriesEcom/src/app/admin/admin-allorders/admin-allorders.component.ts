import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-admin-allorders',
  templateUrl: './admin-allorders.component.html',
  styleUrls: ['./admin-allorders.component.scss']
})
export class AdminAllordersComponent implements OnInit {

  getOrdersUrl : string = `https://localhost:44321/api/Admin/orders`;
  matOrders = new MatTableDataSource();
  displayedColumns : string[] = ['OrderPlacedDate', 'OrderID', 'ProductID', 'ProductName', 'Quantity', 'TotalCost', 'OrderStatus']
  constructor(
    private apiService : ApiServiceService
  ) { }

  @ViewChild(MatSort) sort !: MatSort
  @ViewChild(MatPaginator) paginator !: MatPaginator

  ngOnInit(): void {
    this.apiService.getMethod(this.getOrdersUrl).subscribe((orders : any) => {
      this.matOrders = new MatTableDataSource(orders)
      this.matOrders.sort = this.sort;
      this.matOrders.paginator = this.paginator;
    })
  }

}
