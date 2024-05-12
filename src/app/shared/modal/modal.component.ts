import { Component, output, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ModalData } from './modal.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input({ required: true })
  modal!: ModalData;

  closeIt = output();

  cancel = output();
}
