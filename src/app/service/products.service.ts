import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../models/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getAll(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
