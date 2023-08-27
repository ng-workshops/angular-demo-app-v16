import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit, OnChanges, OnDestroy {
  private _name!: string;
  private subscription!: Subscription;
  private messageService = inject(MessageService);

  @Input()
  message: string | undefined;

  @Input()
  set name(value: string) {
    this._name = value.toLowerCase();
  }

  get name(): string {
    return this._name;
  }

  @Output()
  replyToParent = new EventEmitter<string>();

  ngOnInit() {
    this.subscription = this.messageService.listener$.subscribe(
      (msg) => (this.message = msg)
    );
  }

  ngOnChanges(changes: Record<string, SimpleChange>) {
    if (changes['message']) {
      console.log('changes.message', changes['message'].currentValue);
    }

    if (changes['name']) {
      console.log('changes.name', changes['name'].currentValue);
    }

    if (changes['message'] && changes['name']) {
      console.log('Message AND Name changed');
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reply(message?: string) {
    this.replyToParent.emit(message || 'Message from Child');
  }
}
