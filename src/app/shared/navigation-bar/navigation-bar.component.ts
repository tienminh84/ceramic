import { Component, HostListener  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../components/model/model';
import { CartService } from '../../services/cart-service.service';
import { NgFor, NgIf, CommonModule  } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, CommonModule, ButtonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  cartCount = 0;
  isCartVisible = false;
  cartItems: Product[] = [];
  totalPrice = 0;

  constructor(
    private cartService: CartService,  // Inject CartService
    private router: Router  // Inject Router
  ) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
    this.cartItems = this.cartService.getItems();
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
    if (this.isCartVisible) {
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.cart') || (event.target as HTMLElement).closest('.cart-icon');
    if (!clickedInside) {
      this.isCartVisible = false;
    }
  }

  checkOut() {
    this.router.navigate(['/checkout']);
  }
}
