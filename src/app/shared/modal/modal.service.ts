import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalData } from './modal.model';
import { HostElementService } from './host/host-element.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private hostElementService: HostElementService) {}

  open(data: ModalData, host: ViewContainerRef): ModalComponent {
    data.type = data.type || 'primary';
    return this.createModal(data, host);
  }

  openGlobal(data: ModalData): Observable<ModalComponent> {
    return this.hostElementService.hostElement$.pipe(
      map((host) => this.createModal(data, host))
    );
  }

  private createModal(data: ModalData, host: ViewContainerRef): ModalComponent {
    host.clear();

    const modal = host.createComponent(ModalComponent);

    modal.instance.modal = data;
    modal.instance.closeIt.subscribe(() => modal.destroy());
    modal.instance.cancel.subscribe(() => modal.destroy());

    return modal.instance;
  }
}
