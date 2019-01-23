import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService, private route: Router) { }

  ngOnInit(): void {
    this.productsService.getAll()
      .subscribe(products => this.products = products);
  }
}
