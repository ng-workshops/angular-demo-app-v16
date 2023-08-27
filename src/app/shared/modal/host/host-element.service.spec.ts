import { TestBed } from '@angular/core/testing';

import { HostElementService } from './host-element.service';

describe('HostElementService', () => {
  let service: HostElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
