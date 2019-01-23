import Review from './review.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  reviews: Review[];
}
