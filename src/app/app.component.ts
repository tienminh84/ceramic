import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscribeFormComponent } from "./components/subscribe-form/subscribe-form.component";
import { ChatButtonComponent } from "./shared/chat-button/chat-button.component";
import { NavigationBarComponent } from "./shared/navigation-bar/navigation-bar.component";
import { HomeComponent } from "./components/home/home.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SubscribeFormComponent, ChatButtonComponent, NavigationBarComponent, HomeComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaPaCeramic';
}
