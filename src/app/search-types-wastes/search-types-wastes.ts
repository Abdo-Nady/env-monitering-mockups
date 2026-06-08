import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'نفايات صلبة', actions: 'edit' },
  { position: 2, name: 'نفايات سائلة', actions: 'edit' },
  { position: 3, name: 'نفايات خطرة', actions: 'edit' },
  { position: 4, name: 'نفايات طبية', actions: 'edit' },
];

@Component({
  selector: 'app-search-types-wastes',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-types-wastes.html',
  styleUrl: './search-types-wastes.css',
})
export class SearchTypesWastes {
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
