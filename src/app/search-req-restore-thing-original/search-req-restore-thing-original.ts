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
    position: 1,    name: 'ميرسك مصر',    actions: 'edit',    port: 'ميناء 1',
    shipVoyage: 'محضر 102 بتاريخ 2026-04-22 12:00',    wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'مسودة',    wastes: 'إلقاء زيوت بالماء',
  },
  {
    position: 2,    name: 'سي إم آي - سي جي إم',    actions: 'edit',    port: 'ميناء 2',
    shipVoyage: 'محضر 102 بتاريخ 2026-04-22 12:00',    wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'جارى المتابعة',    wastes: 'إلقاء نفايات صلبة بالماء',
  },
  {
    position: 3,    name: 'أوشن نتورك إكسبريس',    actions: 'edit',    port: 'ميناء 3',
    shipVoyage: 'محضر 102 بتاريخ 2026-04-22 12:00',    wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'مكتمل',    wastes: 'إلقاء نفايات سائلة بالماء',
  },
];

@Component({
  selector: 'app-search-req-restore-thing-original',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-req-restore-thing-original.html',
  styleUrl: './search-req-restore-thing-original.css',
})
export class SearchReqRestoreThingOriginal {
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
