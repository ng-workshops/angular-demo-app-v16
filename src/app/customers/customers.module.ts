import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerStatusPipe } from './customer-status.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    exports: [CustomerComponent, CustomerFormComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatInputModule,
        MatFormFieldModule,
        CustomersRoutingModule,
        HttpClientModule,
        SharedModule,
        CustomerComponent,
        CustomerDetailsComponent,
        CustomerFormComponent,
        CustomerListComponent,
        CustomerStatusPipe,
    ],
})
export class CustomersModule {}
