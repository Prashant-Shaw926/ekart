import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { DisableProductDirective } from '../../../customDirective/disable-product.directive';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input() product: Product;
}
