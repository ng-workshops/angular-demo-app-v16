import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerFormComponent },
  { path: 'customers/new', component: CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
