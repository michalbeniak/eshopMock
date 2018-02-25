import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartServiceService } from '../cart-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-detail-component',
  templateUrl: './cart-detail-component.component.html',
  styleUrls: ['./cart-detail-component.component.css']
})
export class CartDetailComponentComponent implements OnInit {
  
  products: Product[];

  constructor(private cart:CartService, private cartService:CartServiceService ) { }

  ngOnInit() {
    this.products = this.cart.productArray;
    this.cartService.getTotalAmmount();
  }
}
