import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[appCanClick]',
  standalone: true,
})
export class CanClickDirective {
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  @HostBinding('class.app-disabled') isDisabled = true;

  @Input()
  set appCanClick(value: boolean | undefined) {
    this.isDisabled = !value;
    this.renderer.setProperty(
      this.element.nativeElement,
      'title',
      value ? '' : 'Is disabled!'
    );
  }

  action = output<MouseEvent>();

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    if (this.isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.action.emit(e);
  }
}
