import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/service/products.service';
import { WhislistService } from 'src/app/service/whislist.service';

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
