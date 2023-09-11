import { Component, ViewContainerRef } from '@angular/core';
import { HostElementService } from './shared/modal/host/host-element.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
    ],
})
export class AppComponent {
  constructor(
    hostElementService: HostElementService,
    hostElement: ViewContainerRef
  ) {
    hostElementService.setHost(hostElement);
  }
}
