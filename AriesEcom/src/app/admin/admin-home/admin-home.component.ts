import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/api-service.service';
import { AdminBlockEmpComponent } from '../admin-block-emp/admin-block-emp.component';
import { AdminOrdersComponent } from '../admin-orders/admin-orders.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHomeComponent implements OnInit {

  getDistributorUrl : string = `https://localhost:44321/api/Authorizer/getDistributers`;
  getEmployees : string = `https://localhost:44321/api/Warehouse/Emps`;
  viewToggle : boolean = true;
  distBtnColor : string = 'basic';
  empBtnColor : string = 'accent';
  matDistributorsList = new MatTableDataSource();
  matEmployees = new MatTableDataSource();
  displayedColumns : string[] = ['ID', 'FirstName', 'EmailID', 'PhoneNumber', 'City', 'FirmName', 'CreditLimit', 'PurchaseOrders']
  empDisplayColumns : string[] = [ 'ID', 'FirstName', 'LastName', 'EmailID', 'Block' ]

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private apiService : ApiServiceService,
    private dialog : MatDialog,
    private spinnerService : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.distBtnColor = 'basic'
    this.empBtnColor = 'accent'
    this.apiService.getMethod(this.getDistributorUrl).subscribe((dist : any) => {
      this.matDistributorsList = new MatTableDataSource(dist);
      this.matDistributorsList.sort = this.sort;
      this.matDistributorsList.paginator = this.paginator;
    })
    this.viewToggle = true;
  }

  onClickDistributors(){
    this.ngOnInit();
  }
  
  onClickEmployees(){
    this.distBtnColor = 'accent';
    this.empBtnColor = 'basic'
    this.apiService.getMethod(this.getEmployees).subscribe((emp : any) => {
      let filtered = emp.filter((e : any) => e.UserTypeID !== 986123)
      this.matEmployees = new MatTableDataSource(filtered);
      this.matEmployees.sort = this.sort;
      this.matEmployees.paginator = this.paginator
    })
    this.viewToggle = false;
  }

  onClickPODialog(distID : string){
    this.dialog.open(AdminOrdersComponent, {
      height : '95%',
      width : '50%',
      data : distID
    }).afterClosed().subscribe({ next : () => {
        this.ngOnInit()
    }})
  }

  onClickBlockDialog(id : any){
    this.dialog.open(AdminBlockEmpComponent, {
      height : '26%',
      width : '20%',
      data : id
    }).afterClosed().subscribe({next : () => {
      this.spinnerService.show();
      setTimeout(() => {
        this.onClickEmployees()
        this.spinnerService.hide()
      }, 1000);
    }})
  }
}
