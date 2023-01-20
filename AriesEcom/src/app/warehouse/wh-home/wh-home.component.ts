import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/api-service.service';
import { WhAddStockComponent } from '../wh-add-stock/wh-add-stock.component';

@Component({
  selector: 'app-wh-home',
  templateUrl: './wh-home.component.html',
  styleUrls: ['./wh-home.component.scss']
})
export class WhHomeComponent implements OnInit {
  
  getProductsURL : string = 'https://localhost:44321/api/UserLogin/getProducts'
  products : any = [];
  productsX : any = [];

  constructor(
    private apiService : ApiServiceService,
    private dialog : MatDialog,
    private spinnerService : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.show()
    this.apiService.getMethod(this.getProductsURL).subscribe((products : any) => {
      setTimeout(() => {
        this.productsX = products;
        this.products = products;
        this.spinnerService.hide();
      }, 900);
      // this.products.paginator = this.paginator
    });
  }

  onClickUpdateStock(product : any){
    this.dialog.open(WhAddStockComponent, {
      height:'95%',
      width : '58%',
      data : product
    })
  }

  onClickAddDialog(){
    this.dialog.open(WhAddStockComponent, {
      height:'95%',
      width : '58%'
    })
  }

  onClickFilter(category : string){
    this.spinnerService.show();
    setTimeout(() => {
      
      if(category === 'All'){
        this.productsX = this.products
        this.spinnerService.hide()
        
      } else if(category === 'Fashion') {
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 160)
        this.spinnerService.hide()

      } else if(category === 'Headphones'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 650)
        this.spinnerService.hide()

      } else if(category === 'Electronics'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 350)
        this.spinnerService.hide()

      } else if(category === 'Toys'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 450)
        this.spinnerService.hide()
        
      } else if(category === 'Furniture'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 560)
        this.spinnerService.hide()
        
      } else if(category === 'Others'){
        this.productsX = this.products
        this.spinnerService.hide()
        
      }
    }, 600);
  }
}
