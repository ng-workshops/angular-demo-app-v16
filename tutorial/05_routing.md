# Routing

> npx ng generate component home --standalone=true

<!-- Restart ng serve because otherwise in some cases the standalone component is not found by the compiler -->
<!-- Create file in IDE or in command line -->

> src/app/app-routing.module.ts

## src/app/app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## src/app/app.module.ts

```ts
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomersModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

<!-- Create file in IDE or cin command line -->

> src/app/customers/customers-routing.module.ts

## src/app/customers/customers-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: 'customers/:id', component: CustomerFormComponent },
  { path: 'customers/new', component: CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
```

## src/app/customers/customers.module.ts

```ts
@NgModule({
  declarations: [
    CustomerDetailsComponent,
    CustomerComponent,
    CustomerFormComponent,
  ],
  exports: [CustomerComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    CustomersRoutingModule,
  ],
})
export class CustomersModule {}
```

## src/app/app.component.html

<!-- Replace content of existing file -->

```html
<nav>
  <a routerLink="home" routerLinkActive="active">Home</a>
  <a routerLink="customers" routerLinkActive="active">Customers</a>
  <a routerLink="customers/new" routerLinkActive="active">Add customer</a>
</nav>

<router-outlet></router-outlet>
```

## src/app/home/home.component.html

```html
<h1>Welcome to app!</h1>

<p>I am "{{ customer.name | uppercase }}, {{ customer.firstname }}"</p>

<span>These are my hobbies: </span>
<span *ngFor="let h of customer?.hobbies">{{ h }} </span>

<p>I am god in math => 1 + 2 = {{ 1 + 2 }}</p>

<button (click)="showDetails = !showDetails">
  {{ showDetails ? 'Hide' : 'Show' }} the secret message
</button>
<span [hidden]="!showDetails"> My phone number is 123 456 7890 </span>

<br />

<input #phone placeholder="phone number" />
<button
  [class.app-disabled]="!showDetails"
  [disabled]="!showDetails"
  (click)="callMe(phone.value)"
>
  Call me
</button>

<br />
<input placeholder="customer name" [(ngModel)]="customer.name" />

<h5>DEBUG</h5>
<pre>user = <br/>{{ customer | json }}</pre>
```

## src/app/home/home.component.ts

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showDetails = false;

  customer = {
    id: 1,
    name: 'Simpson',
    firstname: 'Homer',
    hobbies: ['eat', 'sleep', 'beer'],
  };

  callMe(phone: string) {
    alert(`Please call this number: ${phone}`);
  }
}
```
