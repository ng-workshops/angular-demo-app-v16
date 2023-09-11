/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { Subscription, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock: any;
  let routerMock: any;

  beforeEach(waitForAsync(() => {
    routerMock = {
      navigateByUrl: jest.fn(),
    };

    customerServiceMock = {
      getAll: jest.fn().mockReturnValue(of([])),
      delete: jest.fn().mockReturnValue(of({})),
    };

    TestBed.configureTestingModule({
      imports: [CustomerListComponent, NoopAnimationsModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: CustomerService, useValue: customerServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the customer form when the add button is clicked', () => {
    component.addNewCustomer();

    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/customers/new');
  });

  it('should call the delete function and reload the data when the delete button is clicked', () => {
    component.deleteCustomer(1);

    expect(customerServiceMock.delete).toHaveBeenCalledWith(1);
    expect(customerServiceMock.getAll).toHaveBeenCalledWith('');
  });
});

describe('CustomerListComponent without TestBed', () => {
  let component: CustomerListComponent;
  let routerMock: any;
  let customerServiceMock: any;

  beforeEach(() => {
    routerMock = {
      navigateByUrl: jest.fn(),
    };

    customerServiceMock = {
      getAll: jest.fn().mockReturnValue(of([])),
      delete: jest.fn().mockReturnValue(of({})),
    };

    component = new CustomerListComponent(customerServiceMock, routerMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('GIVEN the component is initialized', () => {
    let customerSubscription: Subscription;

    beforeEach(() => {
      customerSubscription = component.customers$.subscribe();
    });

    afterEach(() => {
      customerSubscription.unsubscribe();
    });

    it('should navigate to the customer form when the add button is clicked', () => {
      component.addNewCustomer();

      expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/customers/new');
    });

    it('should call the delete function and reload the data when the delete button is clicked', () => {
      component.deleteCustomer(1);

      expect(customerServiceMock.delete).toHaveBeenCalledWith(1);
      expect(customerServiceMock.getAll).toHaveBeenCalledWith('');
    });
  });
});
