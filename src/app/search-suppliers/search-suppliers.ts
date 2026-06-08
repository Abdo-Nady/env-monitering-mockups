import { Component, output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Supplier One', actions: 'edit'},
  {position: 2, name: 'Supplier Two', actions: 'edit'},
  {position: 3, name: 'Supplier Three', actions: 'edit'},
];



@Component({
  selector: 'app-search-suppliers',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-suppliers.html',
  styleUrl: './search-suppliers.css',
})
export class SearchSuppliers {
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
