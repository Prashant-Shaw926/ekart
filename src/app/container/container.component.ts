import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})

export class ContainerComponent {
  name: string = 'John Doe';
  addToCart: number = 0;
  productDetails = {
    name: 'iPhone X',
    price: 999,
    color: 'red',
    discountedPrice: 800,
    stock: 10,
    pImg: '/assets/images/iphone x.jpeg',
    hidden: true,
  };
}