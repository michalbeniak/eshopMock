import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../models/product';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';

@Injectable()
export class CartServiceService {

  totalAmmount:number=0;
  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  getTotalAmmount() {
    let sum =0;
    this.cart.productArray.forEach(element => { sum+= element.Price * element.Quantity   
    });
    this.totalAmmount = this.precisionRound(sum, 2);
    return this.precisionRound(sum,2);

  }

  deleteFromCart(product:Product){
 
    var indexToDelete = this.cart.productArray.indexOf(product, 0);
    this.cart.count -= this.cart.productArray[indexToDelete].Quantity;
    if (indexToDelete >= 0){
        this.cart.productArray.splice(indexToDelete, 1);
    }
   
  }

  addToCart(product:Product ) {
    this.cart.productArray.push(product);
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }
}
