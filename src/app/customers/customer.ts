import { FormBuilder, Validators } from '@angular/forms';

export class Customer {
  // because of "strictPropertyInitialization": true is default in tsconfig.json
  id!: number;
  name: string | undefined;

  firstname?: string;
  hobbies?: string[];
  numberOfOrders?: number;

  static toFormGroup(customer = new Customer()) {
    const formBuilder = new FormBuilder();

    return formBuilder.group({
      id: formBuilder.control(customer.id),
      name: formBuilder.control(customer.name, Validators.required),
      firstname: formBuilder.control(customer.firstname),
      numberOfOrders: formBuilder.control(
        customer.numberOfOrders || 0,
        Validators.min(0)
      ),
    });
  }
}
