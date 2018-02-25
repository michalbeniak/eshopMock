import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  
  myCartOn:Boolean = false;
  productCount;

  constructor(private cartService:CartServiceService, private cart:CartService) { }

  ngOnInit() {
  }
  
  showCart() {
    if (this.myCartOn){
      this.myCartOn = false;
    }
    else {
      this.myCartOn = true;
    }
  }

  closeCart() {
    this.myCartOn = false;
  }
}
