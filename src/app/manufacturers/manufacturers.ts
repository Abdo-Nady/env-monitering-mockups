import { Component, output } from '@angular/core';

export interface ManufacturerModel {
  name: string;
}

@Component({
  selector: 'app-manufacturers',
  standalone: true,
  imports: [],
  templateUrl: './manufacturers.html',
  styleUrl: './manufacturers.css',
})
export class Manufacturers {
  readonly saveClicked = output<void>();

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }
}
