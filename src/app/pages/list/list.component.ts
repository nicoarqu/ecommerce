import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[];
  quantity: number[];
  total = 0;

  constructor() {
    this.products = [
      new Product('AA01', 'Arroz', 1350, ''),
      new Product('AB95', 'Huevos', 880, ''),
      new Product('CF345', 'Fideos', 720, ''),
      new Product('JI76', 'Quinoa', 1780, ''),
      new Product('GH45', 'Jalea', 100, ''),
      new Product('ZD37', 'Cereal', 3500, '')
    ];
    this.quantity = [0, 0, 0, 0, 0, 0];
  }

  ngOnInit(): void {
  }

  add(id: number): void {
    this.quantity[id]++;
    this.total += this.products[id].price;
  }

  substract(id: number): void {
    if (this.quantity[id] > 0) {
      this.quantity[id]--;
      this.total -= this.products[id].price;
    }
  }


}
