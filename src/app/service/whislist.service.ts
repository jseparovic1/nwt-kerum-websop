import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {
  items: Product[] = [];

  add(product: Product): void {
    if (this.isWished(product)) {
      return;
    }

    this.items.push(product);
  }

  getAll(): Product[] {
    return this.items;
  }

  isWished(product: Product): boolean {
    const productInList = this.items.find((item) => item.id === product.id);

    return (productInList) ? true : false;
  }

  remove(product: Product): void {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === product.id) {
           this.items.splice(i, 1);
        }
    }
  }
}
