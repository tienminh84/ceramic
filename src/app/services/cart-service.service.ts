// src/app/services/cart-service.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../components/model/model';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private items: { product: Product; quantity: number }[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  addToCart(product: Product, quantity: number) {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = this.items.find(
      (item) => item.product.productId === product.productId
    );

    if (existingItem) {
      // Nếu có, tăng số lượng
      existingItem.quantity += quantity;
    } else {
      // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
      this.items.push({ product, quantity });
    }

    // Cập nhật số lượng tổng trong giỏ hàng
    this.updateCartCount();
  }

  getItems(): { product: Product; quantity: number }[] {
    return this.items;
  }
  // getItems(): Product[] {
  //   return this.items.map(item => item.product);
  // }

  clearCart(): { product: Product; quantity: number }[] {
    this.items = [];
    this.cartCountSubject.next(0);
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  removeFromCart(productId: number) {
    // Tìm index của sản phẩm trong giỏ hàng
    const index = this.items.findIndex(
      (item) => item.product.productId === productId
    );

    // Nếu tìm thấy sản phẩm, loại bỏ nó khỏi giỏ hàng
    if (index > -1) {
      this.items.splice(index, 1);
      this.updateCartCount();
    }
  }

  private updateCartCount() {
    // Cập nhật tổng số lượng các sản phẩm trong giỏ hàng
    const totalCount = this.items.reduce(
      (count, item) => count + item.quantity,
      0
    );
    this.cartCountSubject.next(totalCount);
  }
}
