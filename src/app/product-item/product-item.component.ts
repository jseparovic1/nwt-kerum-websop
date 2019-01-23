import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import { WhislistService } from '../service/whislist.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  public _product: Product;
  public style = {
    'background-image': ''
  };

  @Input() set product(product: Product) {
    this._product = product;
    this.style['background-image'] = `url(${product.image})`;
  }
  @Input() index: number;

  constructor(
    private router: Router,
    private wishlist: WhislistService,
    private productsService: ProductsService
  ) {}

  showProduct(product: Product) {
    this.router.navigate([`/product/${product.id}`]);
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
