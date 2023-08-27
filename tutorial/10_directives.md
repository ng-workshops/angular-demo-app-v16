# Directives

> npx ng generate module shared --module app

> npx ng generate directive shared/directives/can-click --export

## src/app/shared/directives/can-click.directive.ts

```ts
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCanClick]',
})
export class CanClickDirective {
  @HostBinding('class.app-disabled') isDisabled = true;

  @Input()
  set appCanClick(value: boolean) {
    this.isDisabled = !value;
    this.renderer.setProperty(
      this.element.nativeElement,
      'title',
      value ? '' : 'Is disabled!'
    );
  }

  @Output()
  action = new EventEmitter();

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    if (this.isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.action.emit(e);
  }
}
```

## src/app/customers/customers.module.ts

```ts
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ...
    SharedModule,
    ...
  ],
})
export class CustomersModule {}
```

## src/app/customers/customer/customer.component.html

```html
...

<div class="footer">
  ...
  <button
    mat-icon-button
    [appCanClick]="customer?.numberOfOrders < 10"
    (action)="delete(customer?.id)"
  >
    <mat-icon>delete</mat-icon>
  </button>
</div>
```
