# App Component

## src/app/app.component.html

```html
<br />
<input placeholder="customer name" [(ngModel)]="customer.name" />
```

## src/app/app.module.ts

```ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
```
