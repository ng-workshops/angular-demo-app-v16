import { Component, ViewContainerRef } from '@angular/core';
import { HostElementService } from './shared/modal/host/host-element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    hostElementService: HostElementService,
    hostElement: ViewContainerRef
  ) {
    hostElementService.setHost(hostElement);
  }
}
