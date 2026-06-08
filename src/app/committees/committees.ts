import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTableModule],
  templateUrl: './committees.html',
  styleUrl: './committees.css',
})
export class Committees {
  displayedColumns: string[] = ['position', 'name', 'department', 'type', 'actions'];
  dataSource = COMMITTEE_DATA;

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

export interface CommitteeElement {
  position: number;
  name: string;
  department: string;
  type: string;
  actions: string;
}

const COMMITTEE_DATA: CommitteeElement[] = [
  { position: 1, name: 'محمد عبد الله', department: 'الإدارة الهندسية', type: 'رئيس اللجنة', actions: 'edit' },
  { position: 2, name: 'أحمد مصطفى', department: 'الشئون القانونية', type: 'عضو اللجنة', actions: 'edit' },
  { position: 3, name: 'إبراهيم عبد الرحمن', department: 'الإدارة المالية', type: 'عضو اللجنة', actions: 'edit' },
];
