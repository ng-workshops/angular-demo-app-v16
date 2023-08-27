import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from 'express';
import { CustomerStatusPipe } from '../customer-status.pipe';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent, CustomerStatusPipe],
      providers: [{ provide: Router, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    component.customer = {
      id: 1,
      name: 'test',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
