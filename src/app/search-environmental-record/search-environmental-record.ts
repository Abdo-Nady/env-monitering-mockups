import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  requestDate: string;
  name: string;
  port: string;
  shipVoyage: string;
  wastes: string;
  wasteCollectionDate: string;
  wasteCollectionLocation: string;
  position: number;
  status: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, requestDate: '2026-04-22 12:00', name: 'سفينة : CMA CGM AMAZONIA رقم الطريق 55251', actions: 'edit', port: 'ميناء 1',
    shipVoyage: 'حدث', wasteCollectionDate: '2026-04-22 12:00',
    wasteCollectionLocation: '554541', wastes: 'إلقاء زيوت بالماء برصيف 1 بيتا 52',
    status: 'جارى المتابعة',
  },
  {
    position: 2, requestDate: '2026-04-22 15:00', name: 'شاحنة : س ج م 1251', actions: 'edit', port: 'ميناء 2',
    shipVoyage: 'حدث', wasteCollectionDate: '2026-04-22 12:00',
    wasteCollectionLocation: '633962', wastes: 'تصادم',
    status: 'مكتمل',
  },
  {
    position: 3, requestDate: '2026-04-22 18:25', name: 'شركة : شركة سي إم آي - سي جي إم', actions: 'edit', port: 'ميناء 3',
    shipVoyage: 'حدث', wasteCollectionDate: '2026-04-22 12:00',
    wasteCollectionLocation: '323236', wastes: 'كسر بوابة',
    status: 'مكتمل',
  },
];

@Component({
  selector: 'app-search-environmental-record',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatPaginatorModule],
  templateUrl: './search-environmental-record.html',
  styleUrl: './search-environmental-record.css',
})
export class SearchEnvironmentalRecord {
  displayedColumns: string[] = ['position', 'requestDate', 'port', 'name', 'shipVoyage', 'wastes', 'wasteCollectionLocation', 'wasteCollectionDate', 'status'];
  dataSource = ELEMENT_DATA;
  types: string = '';

  readonly addClicked = output<void>();
  readonly searchClicked = output<void>();

  protected onAddClick(): void {
    this.addClicked.emit();
  }

  protected onSearchClick(): void {
    this.searchClicked.emit();
  }
}
