import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() email = '';
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  handleOnVisible(event: any) {
    this.visible = event;
    this.visibleChange.emit(event);
  }
}
