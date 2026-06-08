import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

export interface TypesWastesElement {
  position: number;
  name: string;
  actions: string;
}

const TYPES_WASTES_DATA: TypesWastesElement[] = [
  { position: 1, name: 'الملحق 1', actions: 'edit' },
  { position: 2, name: 'الملحق 2', actions: 'edit' },
  { position: 3, name: 'الملحق 3', actions: 'edit' },
];

@Component({
  selector: 'app-types-wastes',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTableModule],
  templateUrl: './types-wastes.html',
  styleUrl: './types-wastes.css',
})
export class TypesWastes {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = TYPES_WASTES_DATA;

  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();
  selectedType: 'measurable' | 'event' = 'event';
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['O2', 'CO2', 'CO1'];

  protected onTypeChange(event: MatRadioChange): void {
    this.selectedType = event.value as 'measurable' | 'event';
  }

  protected onSaveClick(): void {
    window.alert('تم الحفظ بنجاح');
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}
