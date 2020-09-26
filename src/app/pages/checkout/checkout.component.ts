import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  dataSource=[];
  displayedColumns=[];

  totalPrice:number=0;
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.displayedColumns=['name', 'quantity', 'price', 'total'];
    let allProducts=[];
    allProducts=this._productService.getProducts();
    
    for (let i=0; i<allProducts.length; i++) {
      allProducts[i].total=allProducts[i].quantity* allProducts[i].price;
      if (allProducts[i].quantity>0){
        this.dataSource.push(allProducts[i]);
      }
      this.totalPrice+=allProducts[i].total;
    }
  }

  handlePaypal() {
    document.forms['paypalForm'].submit();
  }
 

}
