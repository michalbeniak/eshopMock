import { Component, OnInit, Input } from '@angular/core';
import { ProductsList } from '../../../models/products-list';
import { CommunicatorService } from '../../../services/communicator/communicator.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css']
})
export class ShopComponentComponent implements OnInit {
  productList: ProductsList = new ProductsList(null);
  constructor(private communicatorService:CommunicatorService) { }

  ngOnInit() {
    this.communicatorService.getAllProducts(this);
  }


  onChange(event) {
    console.log(event);
    if (event.target.value =="priceLowHigh") {

    }
    else if (event.target.value =="priceHighLow") {

    }
    else if (event.target.value =="nameAz") {
      this.sortAz();
    }
    else if (event.target.value =="nameZa") {
      
    }
    else if (event.target.value =="newest") {
      
    }

  }

  sortAz(){
    var sortedArray1:Product[]= this.productList.ProductsList.sort((n1,n2) => {
      if (n1.Name > n2.Name) {
          return 1;
      }
  
      if (n1.Name < n2.Name) {
          return -1;
      }
  
      return 0;
  });



    var stringArray: string[] = ['AB', 'Z', 'A', 'AC'];

var sortedArray: string[] = stringArray.sort((n1,n2) => {
    if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
});

  }
}
