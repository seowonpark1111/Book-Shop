import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  navigations = [
    { name: 'Introduction', image: '../../../assets/images/cropped.jpg', url:'/who we are'},
    { name: 'shopping-time', image: '../../assets/images/shopping.jpg', url:'/shopping-time'},
    { name: 'find-authors', image: '../../assets/images/authors.jpg', url:'/find-authors'}
  ]
breakpoint:number=4;

numberOfItems:number=0;

products=[];
  constructor(private productService:ProductService) { }
 
  ngOnInit(): void {
    this.products=this.productService.getProducts();
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

  
  
  