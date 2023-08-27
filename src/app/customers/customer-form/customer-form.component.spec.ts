import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { CustomerService } from '../customer.service';
import { Subject } from 'rxjs';

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
