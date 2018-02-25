import { Product } from './product';
import { Injectable } from '@angular/core';

export class ProductsList {
    ProductsList: Product[] = new Array<Product>();

    constructor() {
        this.ProductsList.push(new Product("", "", 
            0, "", "",1));
        this.ProductsList.push(new Product("", "", 
            0, "", "",1));
        this.ProductsList.push(new Product("", "", 
            0, "", "",1));
    }
}
