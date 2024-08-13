import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductItemsComponent } from '../product-items/product-items.component';
import { Product } from '../model/model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ProductItemsComponent, DialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  visible = false;
  imagePath: string = './assets/background.jpg';
  productList: Product[] = [
    {
      productId: 1,
      image: 'assets/1.jpg',
      name: 'Xuan',
      colors: 3,
      price: 190
    },
    {
      productId: 2,
      image: 'assets/2.jpg',
      name: 'Ha',
      colors: 3,
      price: 190
    },
    {
      productId: 3,
      image: 'assets/3.jpg',
      name: 'Thu',
      colors: 3,
      price: 190
    },
    {
      productId: 4,
      image: 'assets/4.jpg',
      name: 'Dong',
      colors: 3,
      price: 190
    },
    {
      productId: 5,
      image: 'assets/5.jpg',
      name: 'Thu Dong',
      colors: 3,
      price: 190
    },
    {
      productId: 6,
      image: 'assets/6.jpg',
      name: 'Xuan Ha',
      colors: 3,
      price: 190
    },
    {
      productId: 7,
      image: 'assets/7.jpg',
      name: 'Xuan Ha Thu',
      colors: 3,
      price: 190
    },
    {
      productId: 8,
      image: 'assets/8.jpg',
      name: 'Xuan Ha Thu Dong',
      colors: 3,
      price: 190
    }
  ];
  showDialog() {
    this.visible = true;
  }
}
