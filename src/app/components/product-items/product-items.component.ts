import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart-service.service';
import { Product } from '../model/model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [ButtonModule, DialogModule],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {
  @Input() product!: Product;
  visible = false;
  @Output() viewDetail: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  showDialog() {
    // this.visible = true;
    this.viewDetail.emit(true);
  }
}
