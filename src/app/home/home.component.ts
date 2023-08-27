import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../shared/modal/modal.service';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MessageService } from './message.service';
import { InfoItemComponent } from './info-item/info-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoBoxComponent, InfoItemComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private modal = inject(ModalService);
  private hostElement = inject(ViewContainerRef);
  private messageService = inject(MessageService);

  message = 'INIT';
  name = 'START_';
  reply = '';

  @ViewChild('child')
  private child!: InfoBoxComponent;

  changeChild() {
    this.message = new Date().toISOString();
    this.name += 'X';
  }

  processReply(event: string) {
    this.reply = event;
  }

  processReplyFromCode() {
    this.child.reply('Send from parent via CODE');
  }

  sendMessage() {
    this.messageService.sendMessage('Send from parent via service');
  }

  openModal() {
    const modal = this.modal.open(
      { message: this.message, title: 'My name is', type: 'primary' },
      this.hostElement
    );

    modal.closeIt.subscribe(() => {
      console.log('MODAL closed');
    });

    modal.cancel.subscribe(() => {
      console.log('MODAL cancelled');
    });
  }

  openModalGlobal() {
    this.modal
      .openGlobal({
        title: 'Global Error',
        message: 'Please contact the support',
        type: 'warn',
      })
      .subscribe((modal) => {
        modal.closeIt.subscribe(() => console.log('Global MODAL closed'));
      });
  }
}
