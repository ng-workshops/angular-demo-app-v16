import { Route } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

export const CUSTOMER_ROUTES: Route[] = [
  { path: '', component: CustomerListComponent },
  { path: ':id', component: CustomerFormComponent },
  { path: 'new', component: CustomerFormComponent },
];
