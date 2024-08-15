import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [FormsModule, CommonModule, LoginComponent],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.css'
})
export class SubscribeFormComponent {
  email: string = '';
  isClicked = false;
  isDialogVisible: boolean = false;

  onClicked() {
    this.isClicked = !this.isClicked;
    if (this.email) {
      console.log('Thanks for subscribing with email')
    }
    this.isDialogVisible = true;
  }
}
