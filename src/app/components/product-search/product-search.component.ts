import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
})
export class ProductSearchComponent {
  @Output() productSearch: EventEmitter<any> = new EventEmitter();

  public search: string;

  constructor(private productService: ProductsService) { }

  searchProducts(event: any) {
    this.productService.getByTerm(event);
  }
}
