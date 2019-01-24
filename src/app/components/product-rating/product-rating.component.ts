import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  template: `
    <div (click)="addRating($event)">
      <div class="rating__outer">
        <div class="rating__inner" [ngStyle]="this.getStarsWidth()"></div>
      </div>
    </div>
  `,
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent {
  private starsTotal = 5;
  private ratingPercentage: number;
  @Output() rated: EventEmitter<number> = new EventEmitter();


  @Input() set rating(rating: number) {
      this.ratingPercentage = (rating / this.starsTotal) * 100;
  }

  getStarsWidth(): object {
      return {
        width: `${this.roundPercentageRating(this.ratingPercentage)}%`
      };
  }

  addRating(event) {
    const ratingPercentage = (event.offsetX / event.target.offsetWidth) * 100;

    const rating = Math.round(
        (this.roundPercentageRating(ratingPercentage) / 100) * this.starsTotal
    );

    this.rated.emit(rating);
  }

  private roundPercentageRating(rating: number): number {
    return Math.round(rating / 10) * 10;
  }
}
