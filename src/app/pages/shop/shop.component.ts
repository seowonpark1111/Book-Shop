import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 
breakpoint:number=4;

numberOfItems:number=0;

products=[];
  constructor(private productService:ProductService) { }
 
  ngOnInit(): void {
    this.products=this.productService.getProducts();

      this.onResize();

  }
onResize(){
  console.log(window.innerWidth);

  if (window.innerWidth<900) {
    this.breakpoint=1;
  }
  else if (window.innerWidth<1030) {
    this.breakpoint=2;
  }
  else if (window.innerWidth<1300){
    this.breakpoint=3;
  }
  else {
    this.breakpoint=4;
    }
  }
  purchase() {
    console.log(this.productService.getTotalCounts())
  }
}
