import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-operating-companies',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTableModule],
  templateUrl: './operating-companies.html',
  styleUrl: './operating-companies.css',
})
export class OperatingCompanies {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = OPERATING_COMPANIES_DATA;

  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();
  selectedType: 'measurable' | 'event' = 'event';
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['O2', 'CO2', 'CO1'];

  protected onTypeChange(event: MatRadioChange): void {
    this.selectedType = event.value as 'measurable' | 'event';
  }

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}

export interface OperatingCompanyElement {
  position: number;
  name: string;
  actions: string;
}

const OPERATING_COMPANIES_DATA: OperatingCompanyElement[] = [
  { position: 1, name: 'نفايات صلبة', actions: 'edit' },
  { position: 2, name: 'نفايات سائلة', actions: 'edit' },
  { position: 3, name: 'نفايات خطرة', actions: 'edit' },
  { position: 4, name: 'نفايات طبية', actions: 'edit' },
];
