import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string;

  constructor(private productsService: ProductsService, private route: Router) { }

  @HostBinding('class') classList: string;

  ngOnInit() {
    this.classList = 'flex flex-row flex-wrap w-full';

    this.productsService.getAll()
      .subscribe(products => {
        this.products = products;
    });

    this.productsService.searchResults.subscribe((result) => {
      if (result.hasOwnProperty('products')) {
        this.searchTerm = result.term;
        this.products = result.products;

        return;
      }

      if (result.length > 0) {
        this.products = result;
      }
    });
  }
}
