import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component:  HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'checkout', component: CheckoutComponent }
];
