import { Component, OnInit } from '@angular/core';
import { WhislistService } from '../service/whislist.service';
import { Product } from '../models/product.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent implements OnInit {

  items: Product[];

  constructor(
    private productsService: ProductsService,
    private whislist: WhislistService
  ) {}

  ngOnInit() {
    this.items = this.whislist.getAll();
  }

  getRating(product: Product): number {
    return this.productsService.getProductRating(product);
  }
}
