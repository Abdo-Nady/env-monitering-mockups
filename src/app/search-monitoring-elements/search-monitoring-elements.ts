import { Component, output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  unitsMeasurement: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'تصادم', unitsMeasurement: 'حدث' , actions: 'edit'},
  {position: 2, name: 'CO2', unitsMeasurement: 'ppm' , actions: 'edit'},
  {position: 3, name: 'رياح', unitsMeasurement: 'm/s' , actions: 'edit'},
  {position: 4, name: 'مطر', unitsMeasurement: 'mm' , actions: 'edit'},
  {position: 5, name: 'غبار', unitsMeasurement: 'mg/m3' , actions: 'edit'},
  {position: 7, name: 'CO1', unitsMeasurement: 'ppm' , actions: 'edit'},
];

@Component({
  selector: 'app-search-monitoring-elements',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-monitoring-elements.html',
  styleUrl: './search-monitoring-elements.css',
})
export class SearchMonitoringElements {
  displayedColumns: string[] = ['position', 'name', 'unitsMeasurement', 'actions'];
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


