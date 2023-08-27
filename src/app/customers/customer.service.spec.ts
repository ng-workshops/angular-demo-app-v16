import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: environment, useValue: environment },
      ],
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
