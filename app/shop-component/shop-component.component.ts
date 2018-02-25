import { Component, OnInit, Input } from '@angular/core';
import { ProductsList } from '../../models/products-list';
import { CommunicatorService } from '../../services/communicator.service';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})
export class ShopComponentComponent implements OnInit {
  @Input()  productList: ProductsList;
  constructor(private communicatorService:CommunicatorService) { }

  ngOnInit() {
    this.communicatorService.getAllProducts(this);
  }

}
