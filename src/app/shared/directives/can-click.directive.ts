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
