import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { Location } from '@angular/common';
import { WhislistService } from '../service/whislist.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  _product: Product;
  style = {
    'background-image': ''
  };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private wishlist: WhislistService,
    private location: Location
  ) {}

  @HostBinding('class') classList: string;

  ngOnInit() {
    this.classList = 'w-full md:w-4/5 mx-auto';
    this.getProduct();
    this.style['background-image'] = `url(${this._product.image})`;
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id).subscribe((product) => this._product = product);
  }

  addToWishlist(product: Product) {
    this.wishlist.add(product);
  }

  isInWishlist(): boolean {
    return this.wishlist.isWished(this._product);
  }

  removeFromWishlist(): void {
    this.wishlist.remove(this._product);
  }

  getRating(): number {
    return this.productsService.getProductRating(this._product);
  }
}
