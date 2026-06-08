import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  port: string;
  shipVoyage: string;
  wastes: string;
  wasteCollectionDate: string;
  wasteCollectionLocation: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, name: 'ميرسك مصر', actions: 'edit', port: 'ميناء 1',
    shipVoyage: 'تاريخ الطلب 01-04-2026 - شركة ميرسك مصر', wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'جارى الجمع', wastes: 'نفايات صلبة و نفايات سائلة',
  },
  {
    position: 2, name: 'سي إم آي - سي جي إم', actions: 'edit', port: 'ميناء 2',
    shipVoyage: 'تاريخ الطلب 02-04-2026 - شركة سي إم آي - سي جي إم', wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'لم يتم الجمع', wastes: 'نفايات سائلة',
  },
  {
    position: 3, name: 'أوشن نتورك إكسبريس', actions: 'edit', port: 'ميناء 3',
    shipVoyage: 'تاريخ الطلب 03-04-2026 - شركة أوشن نتورك إكسبريس', wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'تم الجمع', wastes: 'نفايات خطرة',
  },
];

@Component({
  selector: 'app-search-record-start-end-work',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-record-start-end-work.html',
  styleUrl: './search-record-start-end-work.css',
})
export class SearchRecordStartEndWork {
  displayedColumns: string[] = ['position', 'wasteCollectionDate', 'name', 'port', 'shipVoyage', 'wastes', 'wasteCollectionLocation', 'actions'];
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
