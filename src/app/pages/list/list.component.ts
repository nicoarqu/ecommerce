import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[];
  quantity: number[];
  total = 0;
  cart: {};

  constructor(private db: ProductsService) {
    this.cart = this.db.getCart();
    this.products = this.db.getProducts();
    this.quantity = this.products.map(p => {
      const qty = this.cart[p.code];
      if (!qty) { return 0; }
      else { return qty; }
    });
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
