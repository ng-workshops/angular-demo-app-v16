import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent {
  form: FormGroup = Customer.toFormGroup();

  constructor(
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.form = Customer.toFormGroup();

    this.route.paramMap
      .pipe(
        filter((params) => params.get('id') !== 'new'),
        switchMap((params) => this.customerService.getById(params.get('id')))
      )
      .subscribe((customer) => {
        this.form.patchValue(customer || {});
      });
  }

  submit() {
    const data = this.form.getRawValue();
    const save$ = data.id
      ? this.customerService.update.bind(this.customerService)
      : this.customerService.create.bind(this.customerService);

    save$(data).subscribe(() => {
      this.snackBar.open(`Customer ${data.name} saved successfully.`, '', {
        duration: 2000,
      });

      this.cancel();
    });
  }

  cancel() {
    this.router.navigate(['customers']);
  }
}
