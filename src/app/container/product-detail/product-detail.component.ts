import { Component, ElementRef, Input, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { setBackground } from '../../customDirective/SetBackground.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [setBackground],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  productListCom: ProductListComponent= undefined;

  product : Product;

  ngOnInit(){
   this.product =  this.productListCom.selectedProduct;
  }
}
