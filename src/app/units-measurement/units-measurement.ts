import { Component, output } from '@angular/core';

@Component({
  selector: 'app-units-measurement',
  standalone: true,
  imports: [],
  templateUrl: './units-measurement.html',
  styleUrl: './units-measurement.css',
})
export class UnitsMeasurement {
  readonly saveClicked = output<void>();

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }
}
