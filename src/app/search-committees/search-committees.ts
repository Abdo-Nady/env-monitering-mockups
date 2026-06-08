import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-committees',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-committees.html',
  styleUrl: './search-committees.css',
})
export class SearchCommittees {
  displayedColumns: string[] = ['position', 'name', 'decisionNumber', 'decisionDate','status', 'actions'];
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

export interface PeriodicElement {
  name: string;
  decisionNumber: number;
  position: number;
  decisionDate: string;
  status: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, decisionNumber: 1001, decisionDate: '2026-01-01', name: 'لجنة حوادث الشاحنات', status: 'نشط', actions: 'edit' },
  { position: 2, decisionNumber: 1002, decisionDate: '2026-01-01', name: 'لجنة حوادث السفن', status: 'منتهية', actions: 'edit' },
  { position: 3, decisionNumber: 1003, decisionDate: '2026-01-01', name: 'لجنة حوادث القطارات', status: 'منتهية', actions: 'edit' },
  { position: 4, decisionNumber: 1004, decisionDate: '2026-01-01', name: 'لجنة حوادث الطرق', status: 'منتهية', actions: 'edit' },
];
