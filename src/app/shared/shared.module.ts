import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanClickDirective } from './directives/can-click.directive';

@NgModule({
  declarations: [CanClickDirective],
  imports: [CommonModule],
  exports: [CanClickDirective],
})
export class SharedModule {}
