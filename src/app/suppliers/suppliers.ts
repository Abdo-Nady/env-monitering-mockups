import { Component, output } from '@angular/core';

export interface SupplierModel {
  name: string;
}

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css',
})
export class Suppliers {
  readonly saveClicked = output<void>();

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }
}
