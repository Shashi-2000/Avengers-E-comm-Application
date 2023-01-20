import { AfterContentInit, AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { ApiServiceService } from 'src/app/api-service.service';
import { RaiseOrderComponent } from '../raise-order/raise-order.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  getProductsURL : string = 'https://localhost:44321/api/UserLogin/getProducts'
  products : any = [];
  productsX : any = [];
  qtyInput : number = 0;
  selectedProducts : any = [];
  selectedProduct : any;

  constructor(
    private apiService : ApiServiceService,
    private dialog : MatDialog,
    private spinnerServive : NgxSpinnerService
    ) { }

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngOnInit(): void {
    this.spinnerServive.show()
    this.apiService.getMethod(this.getProductsURL).subscribe((products : any) => {
      setTimeout(() => {
        this.productsX = products;
        this.products = products;
        this.spinnerServive.hide();
      }, 1000)
      // this.products.paginator = this.paginator
    });
  }

  onKeyUp(event : any){
    this.qtyInput = Number((event.target).value);
  }

  onclickRaiseOrder(sProduct : any){
    // if(this.qtyInput >= 50){
    //   this.selectedProduct = {
    //     OrderPlacedDate : new Date,
    //     ProductID : sProduct.ProductID,
    //     ProductName : sProduct.Name,
    //     Quantity : this.qtyInput,
    //     UnitPrice : sProduct.UnitPrice,
    //     ShippingCost : (Number(sProduct.UnitPrice) * this.qtyInput * 0.02).toFixed(2) ,
    //     taxes : Number(sProduct.UnitPrice) * this.qtyInput * 0.07,
    //     TotalCost : Number(((this.qtyInput * sProduct.UnitPrice) + (Number(sProduct.UnitPrice) * this.qtyInput * 0.02) + Number(sProduct.UnitPrice) * this.qtyInput * 0.07).toFixed(2)),
    //   }
    //   this.selectedProducts.push(this.selectedProduct);
    // } else {
    //   alert('Please enter mininum order Quantity')
    // }
    // this.qtyInput = 0;
    // console.log(this.selectedProducts)


    if(this.qtyInput >= 70){
      this.dialog.open(RaiseOrderComponent, {
        height : '98%',
        width : '48%',
        data : {
          product : sProduct,
          qty : this.qtyInput
        },
      }).afterClosed().subscribe(() => {
        this.ngOnInit();
      })
    } else {
      alert('Please enter mininum order Quantity');
    }
    this.qtyInput = 0;
  }

  onClickFilter(category : string){
    this.spinnerServive.show();
    setTimeout(() => {
      
      if(category === 'All'){
        this.productsX = this.products
        this.spinnerServive.hide()
        
        console.log(this.productsX)
      } else if(category === 'Fashion') {
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 160)
        this.spinnerServive.hide()

      } else if(category === 'Headphones'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 650)
        this.spinnerServive.hide()

      } else if(category === 'Electronics'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 350)
        this.spinnerServive.hide()

      } else if(category === 'Toys'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 450)
        this.spinnerServive.hide()
        
      } else if(category === 'Furniture'){
        this.productsX = this.products.filter((e : any) => e.ProductCategoryID === 560)
        this.spinnerServive.hide()
        
      } else if(category === 'Others'){
        this.productsX = this.products
        this.spinnerServive.hide()
        
      }
    }, 600);
  }

  onclickPurchase(){
    // let OrderID = Math.floor(1000 + Math.random() * 9000)
    // this.dialog.open(RaiseOrderComponent, {
    //       height : '98%',
    //       width : '48%',
    //       data : {
    //         products : this.selectedProducts,
    //         OrderID  : OrderID
    //       }
    //     }).afterClosed().subscribe(() => {
    //       this.ngOnInit();
    //     })
  }
}
