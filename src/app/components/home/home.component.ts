import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductItemsComponent } from '../product-items/product-items.component';
import { Product } from '../model/model';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ProductItemsComponent, DialogModule, ButtonModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible = false;
  imagePath: string = './assets/background.jpg';
  selectedProduct: Product = {
    productId: 1,
    image: 'assets/1.jpg',
    name: 'Xuan',
    colors: 3,
    price: 190,
    detail: 'default'
  }

  constructor(private cartService: CartService) {}

  productList: Product[] = [
    {
      productId: 1,
      image: 'assets/1.jpg',
      name: 'Xuan',
      colors: 1,
      price: 10,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 2,
      image: 'assets/2.jpg',
      name: 'Ha',
      colors: 2,
      price: 15,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 3,
      image: 'assets/3.jpg',
      name: 'Thu',
      colors: 3,
      price: 20,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 4,
      image: 'assets/4.jpg',
      name: 'Dong',
      colors: 4,
      price: 25,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 5,
      image: 'assets/5.jpg',
      name: 'Thu Dong',
      colors: 2,
      price: 10,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 6,
      image: 'assets/6.jpg',
      name: 'Xuan Ha',
      colors: 3,
      price: 15,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 7,
      image: 'assets/7.jpg',
      name: 'Xuan Ha Thu',
      colors: 2,
      price: 20,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    },
    {
      productId: 8,
      image: 'assets/8.jpg',
      name: 'Xuan Ha Thu Dong',
      colors: 3,
      price: 30,
      detail: 'The aptly named Flow Collection is a range which takes inspiration from the Art Nouveau era and transforms it into modern yet timeless furniture with effortless curvature. Each piece stands tall on angular legs and a middle supporting structure composed of metal which adds a furthur dimension to this collection.'
    }
  ];
  showDialog(product: Product) {
    this.visible = true;
    this.selectedProduct = product;
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
    this.cartService.addToCart(product);
    this.visible = false;
  }
}
