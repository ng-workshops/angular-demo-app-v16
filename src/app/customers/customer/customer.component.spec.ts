import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { Router } from 'express';
import { CustomerStatusPipe } from '../customer-status.pipe';

describe('CustomerComponent', () => {
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [CustomerComponent, CustomerStatusPipe],
      providers: [{ provide: Router, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(CustomerComponent);

    const customer = signal({
      id: 1,
      name: 'test',
    });

    fixture.componentInstance.customer =
      customer as unknown as typeof fixture.componentInstance.customer;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
