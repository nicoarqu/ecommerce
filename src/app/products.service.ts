import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    new Product('AA01', 'Arroz', 1350, ''),
    new Product('AB95', 'Huevos', 880, ''),
    new Product('CF345', 'Fideos', 720, ''),
    new Product('JI76', 'Quinoa', 1780, ''),
    new Product('GH45', 'Jalea', 100, ''),
    new Product('ZD37', 'Cereal', 3500, '')
  ];

  cart = {
    AA01: 1,
    AB95: 2,
    ZD37: 5,
    GH45: 3,
  };

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(code: string): Product {
    return this.products.find(p => p.code === code.toUpperCase());
  }

  getCart(): {} {
    return this.cart;
  }


}
