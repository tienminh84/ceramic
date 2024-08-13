import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.css'
})
export class SubscribeFormComponent {
  email: string = '';
  isClicked = '';

  onClicked() {
    this.isClicked = 'black';
    if (this.email) {
      console.log('Thanks for subscribing with email')
    }
  }
}
