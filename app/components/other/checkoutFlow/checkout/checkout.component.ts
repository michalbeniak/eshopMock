import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
  }

}
