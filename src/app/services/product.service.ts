import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  products= [
    {id: 0, name: 'books', price: '15', icon: 'book-open-solid', color: 'primary', quantity:0 },
    {id: 0, name: 'books', price: '20', icon: 'book-solid', color: 'warm', quantity:0 },
    {id: 0, name: 'books', price: '10', icon: 'book-reader-solid', color: 'accent', quantity:0 },
  ];
  
  private _countSubject = new Subject<number>();
  public count$=this._countSubject.asObservable();

  constructor() { }

  getProducts(){
    return this.products;
  }
  getTotalCounts() {
    let totalCount=0;
      for(let product of this.products){
        totalCount+=product.quantity;
      }
      this._countSubject.next(totalCount)
  }

}
