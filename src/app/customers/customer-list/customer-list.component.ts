import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Observable, Subject, merge } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent {
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

  constructor(
    private customerService: CustomerService,
    public router: Router
  ) {}

  addNewCustomer() {
    this.router.navigateByUrl('/customers/new');
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(() => this.reload$.next());
  }
}
