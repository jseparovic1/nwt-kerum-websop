import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../models/mock-products';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  showProduct(product: Product) {
    console.log('Showing product' + JSON.stringify(product));
  }

  getProducts(): void {
    this.productsService.getAll()
      .subscribe((products) => this.products = products);
  }
}
