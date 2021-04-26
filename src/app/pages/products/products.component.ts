import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  productName = '';
  editMode = false;
  editId = -1;
  editCode = '';

  form = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.min(1)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
  });


  constructor() { }

  ngOnInit(): void {
    this.products = [
      new Product('AA01', 'Arroz', 1350, ''),
      new Product('AB95', 'Huevos', 880, ''),
      new Product('CF345', 'Fideos', 720, ''),
      new Product('JI76', 'Quinoa', 1780, ''),
      new Product('GH45', 'Jalea', 100, ''),
      new Product('ZD37', 'Cereal', 3500, '')
    ];
  }

  get code() { return this.form.get('code'); }
  get name() { return this.form.get('name'); }
  get price() { return this.form.get('price'); }
  get description() { return this.form.get('description'); }

  // CRUD Products

  addProduct(): void {
    if (this.form.valid) {
      const { code, name, price, description } = this.form.value;
      this.products.push(new Product(code, name, price, description));
      this.form.reset();
    } else alert("Los datos ingresados no son válidos")
  }

  turnEditMode(): void {
    if (this.editId > -1) {
      const { code, name, price, description } = this.products[this.editId];
      this.form.setValue({ code, name, price, description });
      this.editMode = true;
    }
  }

  editProduct(): void {
    if (this.editId > -1) {
      const { code, name, price, description } = this.form.value;
      this.products[this.editId] = new Product(code, name, price, description);
      this.editMode = false;
      this.form.reset();
    }
  }

  removeProduct(): void {
    this.findByCode();
    if (this.editId > -1) {
      const product = this.products[this.editId];
      this.products.splice(this.editId, 1);
      alert(`Se ha eliminado el producto ${product.name} de código: ${product.code}`);
    }
    this.form.reset();
    this.editCode = '';
  }

  findByCode(): void {
    this.editCode = this.editCode.toUpperCase();
    let idx = -1;
    const productExists = this.products.find(p => p.code === this.editCode);
    if (productExists) {
      idx = this.products.indexOf(productExists);
    }
    this.editId = idx;
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

  searchByCode(): void {
    let filtered = this.products.filter(p => p.code === this.editCode);
    if (!filtered.length) {
      filtered = [
        new Product('AA01', 'Arroz', 1350, ''),
        new Product('AB95', 'Huevos', 880, ''),
        new Product('CF34', 'Fideos', 720, ''),
        new Product('JI76', 'Quinoa', 1780, ''),
        new Product('GH45', 'Jalea', 100, ''),
        new Product('ZD37', 'Cereal', 3500, '')
      ];
    }
    this.products = filtered;
    this.findByCode();
  }

}
