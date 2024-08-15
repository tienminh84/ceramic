import { Component, Input } from '@angular/core';
import { Product } from '../model/model';
import { CartService } from '../../services/cart-service.service';
import { NgFor } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgFor, ButtonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  imagePath: string = './assets/background3.jpg';
  totalPrice: number = 0;

  @Input() cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  }
}
