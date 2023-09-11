import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanClickDirective } from './directives/can-click.directive';

@NgModule({
    imports: [CommonModule, CanClickDirective],
    exports: [CanClickDirective],
})
export class SharedModule {}
