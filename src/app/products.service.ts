import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    new Product('AA01', 'Leche', 1350, 'Leche semidescremada sin lactosa Loncoleche 200 ml', 'https://jumbo.vtexassets.com/arquivos/ids/346239-180-180/Principal-3367.jpg?v=637299018606170000'),
    new Product('AB95', 'Huevos', 880, 'Caja de 12 un.', 'https://jumbo.vtexassets.com/arquivos/ids/416171-180-180/Huevos-grandes-blancos-12-un.jpg?v=637479989911600000'),
    new Product('CF345', 'Fideos', 720, 'Para sopas', 'https://jumbo.vtexassets.com/arquivos/ids/396028-180-180/Fideos-para-Sopa-Carozzi-Bolsa-250-g-Mariposas.jpg?v=637469290484970000'),
    new Product('JI76', 'Quinoa', 1780, 'quinoa',
      'https://jumbo.vtexassets.com/arquivos/ids/175904-180-180/271999.jpg?v=636396021251000000'),
    new Product('GH45', 'Jalea', 100, 'jalea', 'https://jumbo.vtexassets.com/arquivos/ids/396867-180-180/Jalea-frambuesa-110-g.jpg?v=637469299376030000'),
    new Product('ZD37', 'Cereal', 3500, 'cereal',
      'https://jumbo.vtexassets.com/arquivos/ids/345996-180-180/Principal-13587.jpg?v=637297724454700000')
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
