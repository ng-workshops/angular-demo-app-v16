import { TestBed } from '@angular/core/testing';
import { CanClickDirective } from './can-click.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('CanClickDirective', () => {
  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: {},
        },
        Renderer2,
      ],
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const component: CanClickDirective = new CanClickDirective();
      expect(component).toBeTruthy();
    });
  });
});
