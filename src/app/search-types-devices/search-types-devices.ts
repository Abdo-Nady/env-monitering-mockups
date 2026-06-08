import { Component, output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  moniteringElements: string;
  actions: string;
  IntegrationMechanism: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'مراقبة جودة الهواء', moniteringElements: 'CO1 , CO2' , actions: 'edit', IntegrationMechanism: 'Serial Port'},
  {position: 2, name: 'مراقبة درجة الحرارة', moniteringElements: 'C°' , actions: 'edit', IntegrationMechanism: 'TCP Socket'},
  {position: 3, name: 'مراقبة درجة الرطوبة', moniteringElements: '%' , actions: 'edit', IntegrationMechanism: 'Webhooks'},
];

@Component({
  selector: 'app-search-types-devices',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-types-devices.html',
  styleUrl: './search-types-devices.css',
})
export class SearchTypesDevices {
  displayedColumns: string[] = ['position', 'name', 'moniteringElements', 'IntegrationMechanism' , 'actions'];
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
