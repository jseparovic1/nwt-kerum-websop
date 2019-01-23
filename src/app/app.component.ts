import { Component, OnInit } from '@angular/core';
import { ProductsService } from './service/products.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kerum webshop';
}
