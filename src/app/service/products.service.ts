import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../models/mock-products';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Observable<Product[]>;
  public searchResults = new BehaviorSubject<object>(new Object);

  constructor() {
     this.products = of(PRODUCTS);
   }

  public getAll(term?: string): Observable<any> {
    return this.products;
  }

  public getByTerm(term: string) {
    if (!term.trim()) {
      return this.searchResults.next(PRODUCTS);
    }

    this.searchResults.next(
      {
        'products': PRODUCTS.filter(product => product.name.toLocaleLowerCase().startsWith(term)),
        'term': term,
      }
    );
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
