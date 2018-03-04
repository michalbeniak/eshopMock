import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../../services/cartService/cart-service.service';
import { ContactDetails } from '../../../../models/contact-details';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkboxValue: boolean = false;
  model:ContactDetails = new ContactDetails("","","","","","","","","")
  constructor(private cartService:CartServiceService) { }

  ngOnInit() {
    this.model=this.cartService.getCheckout();
  }

  onSubmit() {
    this.cartService.setNextStage();
  }
}
