import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

export interface ReviewerElement {
  position: number;
  name: string;
  actions: string;
}

const REVIEWER_DATA: ReviewerElement[] = [
  { position: 1, name: 'الملحق 1', actions: 'edit' },
  { position: 2, name: 'الملحق 2', actions: 'edit' },
  { position: 3, name: 'الملحق 3', actions: 'edit' },
];

@Component({
  selector: 'app-reviewers',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTableModule],
  templateUrl: './reviewers.html',
  styleUrl: './reviewers.css',
})
export class Reviewers {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = REVIEWER_DATA;

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
