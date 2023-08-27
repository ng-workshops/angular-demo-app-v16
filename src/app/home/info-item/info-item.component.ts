import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
})
export class InfoItemComponent {
  private _messageValue!: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input()
  get message() {
    return this._messageValue;
  }

  set message(val) {
    this._messageValue = val;
    this.messageChange.emit(this._messageValue);
  }
}
