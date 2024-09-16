import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customer.routes').then((mod) => mod.CUSTOMER_ROUTES),
  },
  { path: '**', component: HomeComponent },
];
