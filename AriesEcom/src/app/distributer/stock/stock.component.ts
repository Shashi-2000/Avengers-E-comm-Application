import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  getStockUrl : string = `https://localhost:44321/api/Distributer/stock`;
  matStock = new MatTableDataSource();
  displayedColumns : string[] = ['ID', 'ProductID', 'ProductName', 'UnitPrice', 'Quantity']

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private apiService : ApiServiceService
  ) { }

  ngOnInit(): void {
    let distributerID = localStorage.getItem('userID')
    this.apiService.getMethod(`${this.getStockUrl}/${distributerID}`).subscribe((stock : any) => {
      this.matStock = new MatTableDataSource(stock);
      this.matStock.sort = this.sort;
      this.matStock.paginator = this.paginator;
    })
  }

}
