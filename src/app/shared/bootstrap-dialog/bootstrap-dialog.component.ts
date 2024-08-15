import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-bootstrap-dialog',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-dialog.component.html',
  styleUrl: './bootstrap-dialog.component.css'
})
export class BootstrapDialogComponent {
  openModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const modal = new Modal(modalElement); // Create a new Modal instance
      modal.show();
    }
  }

  closeModal() {
    const modalElement = document.getElementById('exampleModal');
    if (modalElement) {
      const modal = Modal.getInstance(modalElement); // Get the existing Modal instance
      modal?.hide();
    }
  }
}
