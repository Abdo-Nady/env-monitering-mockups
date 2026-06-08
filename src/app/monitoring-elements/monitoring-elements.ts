import { Component, output } from '@angular/core';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-monitoring-elements',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './monitoring-elements.html',
  styleUrl: './monitoring-elements.css',
})
export class MonitoringElements {
  readonly saveClicked = output<void>();
  isMeasurable: boolean = false;
  selectedType: 'measurable' | 'event' = 'event';

  protected onTypeChange(event: MatRadioChange): void {
    this.selectedType = event.value as 'measurable' | 'event';
    this.isMeasurable = this.selectedType === 'measurable';
  }

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }
}
