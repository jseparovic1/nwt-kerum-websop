import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../models/mock-products';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Observable<object>;
  public searchResults = new BehaviorSubject<object>(new Object);

  constructor() {
     this.products = of({
        'products': PRODUCTS,
        'term': null,
      });
   }

  public getAll(term?: string): Observable<any> {
    return this.products;
  }

  public getByTerm(term: string) {
    console.log(term);

    if (!term.trim()) {
      return this.searchResults.next({
        'products': PRODUCTS,
        'term': '',
      });
    }

    this.searchResults.next(
      {
        'products': PRODUCTS.filter(product => product.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1),
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
