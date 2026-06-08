import { Component, output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'mg/m^3', actions: 'edit'},
  {position: 2, name: 'ppm', actions: 'edit'},
  {position: 3, name: 'mg/L', actions: 'edit'},
];



@Component({
  selector: 'app-search-units-measurement',
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-units-measurement.html',
  styleUrl: './search-units-measurement.css',
})

export class SearchUnitsMeasurement {
  displayedColumns: string[] = ['position', 'name', 'actions'];
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