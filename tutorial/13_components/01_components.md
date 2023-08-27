# 1 Component interaction - Parent to Child

> npx ng generate component home/info-box --standalone=true

## src/app/home/info-box/info-box.component.html

```html
<mat-card>
  <mat-card-content>
    <div>
      <p>@Input() Message: {{ message }}</p>
    </div>
  </mat-card-content>
</mat-card>
```

## src/app/home/info-box/info-box.component.ts

```ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent implements OnInit {
  @Input()
  message: string | undefined;
}
```

## src/app/home/home.component.html

```html
<p>
  <button (click)="changeChild()">Change Child data</button>
</p>

<app-info-box [message]="message"></app-info-box>
```

## src/app/home/home.component.ts

```ts
import { InfoBoxComponent } from './info-box/info-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, InfoBoxComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  message = 'INIT';

  changeChild() {
    this.message = new Date().toISOString();
  }
}
```
