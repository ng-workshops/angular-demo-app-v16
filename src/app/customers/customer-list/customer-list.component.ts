import { Component, inject } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Observable, Subject, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith,
} from 'rxjs/operators';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerComponent } from '../customer/customer.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatIconButton,
    MatIcon,
    CustomerComponent,
    CustomerDetailsComponent,
    AsyncPipe,
  ],
})
export class CustomerListComponent {
  private customerService = inject(CustomerService);
  public router = inject(Router);
  searchTerm = new FormControl<string>('', { nonNullable: true });

  private search$: Observable<string> = this.searchTerm.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    startWith('')
  );
  private reload$ = new Subject<void>();

  customers$: Observable<Customer[]> = merge(this.search$, this.reload$).pipe(
    switchMap(() => {
      return this.customerService.getAll(this.searchTerm.value);
    })
  );

  addNewCustomer() {
    this.router.navigateByUrl('/customers/new');
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(() => this.reload$.next());
  }
}
