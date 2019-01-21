import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {

  public _product: Product;
  public style = {
    'background-image': ''
  };

  @Input() set product(product: Product) {
    this._product = product;
    this.style['background-image'] = `url(${product.image})`;
  }
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
  }
}
