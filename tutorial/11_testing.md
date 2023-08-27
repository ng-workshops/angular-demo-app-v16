# Testing - Fix existing tests

## src/app/app.component.spec.ts

```ts
import { TestBed, waitForAsync } from '@angular/core/testing';

it(`should have showDetails set to false`, waitForAsync(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app: AppComponent = fixture.debugElement.componentInstance;
  expect(app.showDetails).toBeFalsy();
}));
```

## src/app/shared/directives/can-click.directive.spec.ts

```ts
const directive = new CanClickDirective({} as any, {} as any);
```

## src/app/customers/customer-form/customer-form.component.spec.ts

```ts
import { HttpClientModule } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { CustomerService } from '../customer.service';
import { CustomerFormComponent } from './customer-form.component';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  let routeMock: any;
  const paramMapTestSubject = new Subject();

  beforeEach(waitForAsync(() => {
    routeMock = {
      paramMap: paramMapTestSubject.asObservable(),
    };

    TestBed.configureTestingModule({
      declarations: [CustomerFormComponent],
      imports: [
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        RouterModule,
        HttpClientModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: {} },
        { provide: CustomerService, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## src/app/customers/customer-list/customer-list.component.spec.ts

```ts
let customerServiceMock: any;

beforeEach(async(() => {
  customerServiceMock = {
    getAll: () => of([]),
  };

  TestBed.configureTestingModule({
    declarations: [CustomerListComponent],
    providers: [
      { provide: Router, useValue: {} },
      { provide: CustomerService, useValue: customerServiceMock },
    ],
    schemas: [NO_ERRORS_SCHEMA],
  });

  fixture = TestBed.createComponent(CustomerListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
}));
```

## src/app/home/home.component.spec.ts

```ts
import { NO_ERRORS_SCHEMA } from '@angular/core';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
  }).compileComponents();
});
```

## src/app/customers/customer.service.spec.ts

```ts
beforeEach(() =>
  TestBed.configureTestingModule({
    providers: [{ provide: HttpClient, useValue: {} }],
  })
);
```

## src/app/customers/customer/customer.component.spec.ts

```ts
beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [CustomerComponent, CustomerStatusPipe],
    providers: [{ provide: Router, useValue: {} }],
    schemas: [NO_ERRORS_SCHEMA],
  }).compileComponents();
});
```
