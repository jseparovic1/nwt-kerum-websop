import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../models/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Observable<Product[]>;

  constructor() {
     this.products = of(PRODUCTS);
   }

  public getAll(): Observable<Product[]> {
    return this.products;
  }

  public findByTerm(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return this.getAll();
    }

    return of(PRODUCTS.filter(product => product.name.startsWith(term)));
  }

  public getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  public getProductRating(product: Product) {
    const initial = 0;

    const ratingTotal = product.reviews.reduce((ratingSum, review) => {
      return ratingSum + review.rating;
    }, initial);

    return ratingTotal / product.reviews.length;
  }
}
