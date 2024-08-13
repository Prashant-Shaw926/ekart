import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

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

  searchText: string = '';

  searchFilter(value: string) {
    this.searchText = value;
  }
}
