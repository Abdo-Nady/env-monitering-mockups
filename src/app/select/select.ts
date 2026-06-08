import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class Select {
  /** Bound to the dropdown; extend with API or @Output when wiring data. */
  readonly control = new FormControl<string | null>(null);

  readonly options = [
    { value: 'measurable', label: 'قابلة للقياس' },
    { value: 'event', label: 'حدث' },
  ];
}
