import { Routes } from '@angular/router';
import { BuyPageComponent } from '../components/buy-page/buy-page.component';
import { SellPageComponent } from '../components/sell-page/sell-page.component';
import { UserPageComponent } from '../components/user-page/user-page.component';
import { WelcomePageComponent } from '../components/welcome-page/welcome-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('../components/welcome-page/welcome-page.component').then(mod => mod.WelcomePageComponent)
      },
    { 
      path: 'buy', 
      loadComponent: () => import('../components/buy-page/buy-page.component').then(mod => mod.BuyPageComponent)
    },
    { 
        path: 'sell', 
        loadComponent: () => import('../components/sell-page/sell-page.component').then(mod => mod.SellPageComponent)
    },
    { 
        path: 'user', 
        loadComponent: () => import('../components/user-page/user-page.component').then(mod => mod.UserPageComponent)
    },
];
