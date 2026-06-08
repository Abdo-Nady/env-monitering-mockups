import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Owner One', actions: 'edit' },
  { position: 2, name: 'Owner Two', actions: 'edit' },
  { position: 3, name: 'Owner Three', actions: 'edit' },
];

@Component({
  selector: 'app-search-owners',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-owners.html',
  styleUrl: './search-owners.css',
})
export class SearchOwners {
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
