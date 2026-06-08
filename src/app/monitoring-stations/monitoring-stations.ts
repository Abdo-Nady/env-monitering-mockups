import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-monitoring-stations',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule],
  templateUrl: './monitoring-stations.html',
  styleUrl: './monitoring-stations.css',
})
export class MonitoringStations {
  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();
  selectedType: 'measurable' | 'event' = 'event';
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['رياح', 'مطر', 'غبار','CO2','CO1','O2'];

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
