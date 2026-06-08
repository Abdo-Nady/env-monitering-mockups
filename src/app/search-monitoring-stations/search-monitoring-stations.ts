import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  moniteringElements: string;
  actions: string;
  IntegrationMechanism: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'محطة الأرصد الجوية - بورسعيد', moniteringElements: 'الرياح , المطر', actions: 'edit', IntegrationMechanism: 'Serial Port' },
  { position: 2, name: 'محطة الأرصد الجوية - البحر الأحمر', moniteringElements: 'التلوث الإشعاعي', actions: 'edit', IntegrationMechanism: 'Webhooks' },
  { position: 3, name: 'محطة الأرصد الجوية - شمال سيناء', moniteringElements: 'التلوث الإشعاعي', actions: 'edit', IntegrationMechanism: 'Webhooks' },
];

@Component({
  selector: 'app-search-monitoring-stations',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-monitoring-stations.html',
  styleUrl: './search-monitoring-stations.css',
})
export class SearchMonitoringStations {
  displayedColumns: string[] = ['position', 'name', 'moniteringElements', 'IntegrationMechanism', 'actions'];
  dataSource = ELEMENT_DATA;

  readonly addClicked = output<void>();
  readonly searchClicked = output<void>();

  protected onAddClick(): void {
    this.addClicked.emit();
  }

  protected onSearchClick(): void {
    this.searchClicked.emit();
  }
}
