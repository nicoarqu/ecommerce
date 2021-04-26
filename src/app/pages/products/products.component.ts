import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  productName = '';

  constructor() {
    this.products = [
      new Product('AA01', 'Arroz', 1350, ''),
      new Product('AB95', 'Huevos', 880, ''),
      new Product('CF345', 'Fideos', 720, ''),
      new Product('JI76', 'Quinoa', 1780, ''),
      new Product('GH45', 'Jalea', 100, ''),
      new Product('ZD37', 'Cereal', 3500, '')
    ];
  }

  ngOnInit(): void {
  }

  add(id: number): void {
    return;
  }

  substract(id: number): void {
    return;
  }

  searchByName(): void {
    let filtered = this.products.filter(p => p.name.toLowerCase().indexOf(this.productName) > -1);
    if (!filtered.length && this.productName) {
      filtered = [
        new Product('AA01', 'Arroz', 1350, ''),
        new Product('AB95', 'Huevos', 880, ''),
        new Product('CF345', 'Fideos', 720, ''),
        new Product('JI76', 'Quinoa', 1780, ''),
        new Product('GH45', 'Jalea', 100, ''),
        new Product('ZD37', 'Cereal', 3500, '')
      ];
    }

    this.products = filtered;
  }


}
