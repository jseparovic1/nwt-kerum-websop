import { Product } from './product.model';

export default interface ProductResponse {
  products: Array<Product>;
  term: any;
}
