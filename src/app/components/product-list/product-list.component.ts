import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import { Product } from 'src/app/models/product.model';

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
