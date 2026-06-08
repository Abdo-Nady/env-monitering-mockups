import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-search-operating-companies',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-operating-companies.html',
  styleUrl: './search-operating-companies.css',
})
export class SearchOperatingCompanies {
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

export interface PeriodicElement {
  name: string;
  decisionNumber: number;
  position: number;
  decisionDate: string;
  status: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, decisionNumber: 1001, decisionDate: '2026-01-01', name: 'شركة تشغيل 1', status: 'نشط', actions: 'edit' },
  { position: 2, decisionNumber: 1002, decisionDate: '2026-01-01', name: 'شركة تشغيل 2', status: 'منتهية', actions: 'edit' },
  { position: 3, decisionNumber: 1003, decisionDate: '2026-01-01', name: 'شركة تشغيل 3', status: 'منتهية', actions: 'edit' },
  { position: 4, decisionNumber: 1004, decisionDate: '2026-01-01', name: 'شركة تشغيل 4', status: 'منتهية', actions: 'edit' },
];
