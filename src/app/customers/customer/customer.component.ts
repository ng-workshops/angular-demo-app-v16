import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerStatusPipe } from '../customer-status.pipe';
import { CanClickDirective } from '../../shared/directives/can-click.directive';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss'],
    standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        CanClickDirective,
        CustomerStatusPipe,
    ],
})
export class CustomerComponent {
  @Input({ required: true }) customer!: Customer;

  @Output() deleteCustomer = new EventEmitter<number>();

  constructor(private router: Router) {}

  showDetails = false;

  showMore() {
    this.showDetails = !this.showDetails;
  }

  edit() {
    this.router.navigate(['customers', this.customer?.id]);
  }

  delete(id: number) {
    this.deleteCustomer.emit(id);
  }
}
