import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Factory One', actions: 'edit' },
  { position: 2, name: 'Factory Two', actions: 'edit' },
  { position: 3, name: 'Factory Three', actions: 'edit' },
];

@Component({
  selector: 'app-search-manufacturers',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-manufacturers.html',
  styleUrl: './search-manufacturers.css',
})
export class SearchManufacturers {
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
