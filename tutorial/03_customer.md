# Customer

# Optionally install Angular CLI globally or use npx

> npm install @angular/cli -g

> npx ng generate module customers --module app

> npx ng generate component customers/customer

> npx ng generate component customers/customer-details

## src/app/app.component.html

Replace exsiting HTML code with the following:

```html
<app-customer></app-customer>
```

## src/app/customers/customers.module.ts

```ts
@NgModule({
  declarations: [CustomerDetailsComponent, CustomerComponent],
  exports: [CustomerComponent],
  imports: [CommonModule],
})
export class CustomersModule {}
```

## src/app/customers/customer/customer.component.ts

```ts
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  @Input() customer: any;

  showDetails = false;

  showMore() {
    this.showDetails = !this.showDetails;
  }
}
```

## src/app/customers/customer/customer.component.html

```html
<div class="header">
  <a>
    <h4>
      {{customer?.name}}{{customer?.firstname ? ', ' + customer?.firstname :
      ''}}
    </h4>
  </a>
</div>
<div class="content">
  <span> My hobbies: "{{ customer?.hobbies }}" </span>
  <button mat-icon-button (click)="showMore()">
    <mat-icon>
      {{ showDetails ? 'keyboard_arrow_down' : 'keyboard_arrow_right' }}
    </mat-icon>
  </button>
</div>
<div class="details" *ngIf="showDetails">
  <app-customer-details></app-customer-details>
</div>
```

## src/app/customers/customers.module.ts

```ts
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [CustomerComponent, CustomerDetailsComponent],
  exports: [CustomerComponent],
})
export class CustomersModule {}
```

## src/app/customers/customer-details/customer-details.component.html

```html
<p>Some more information about the customer...</p>
```

## src/app/app.component.html

```html
<app-customer [customer]="customer"></app-customer>
```
