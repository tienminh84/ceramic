// src/app/services/cart-service.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../components/model/model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.cartCountSubject.next(this.items.length);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    this.cartCountSubject.next(0);
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
