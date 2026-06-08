import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  requestDate: string;
  name: string;
  port: string;
  shipVoyage: string;
  wastes : string
  wasteCollectionDate: string;
  wasteCollectionLocation: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, requestDate: '2026-04-22', name: 'ميرسك مصر', actions: 'edit', port: 'ميناء 1',
     shipVoyage: 'رحلة 1', wasteCollectionDate: '2026-04-22 12:00',
      wasteCollectionLocation: 'رصيف 1 بيتا 52', wastes: 'نفايات صلبة و نفايات سائلة' },
  { position: 2, requestDate: '2026-04-22', name: 'سي إم آي - سي جي إم', actions: 'edit', port: 'ميناء 2',
     shipVoyage: 'رحلة 2', wasteCollectionDate: '2026-04-22 12:00',
      wasteCollectionLocation: 'رصيف 2 بيتا 52', wastes: 'نفايات سائلة' },
  { position: 3, requestDate: '2026-04-22', name: 'أوشن نتورك إكسبريس', actions: 'edit', port: 'ميناء 3',
     shipVoyage: 'رحلة 3', wasteCollectionDate: '2026-04-22 12:00',
      wasteCollectionLocation: 'رصيف 3 بيتا 52', wastes: 'نفايات خطرة' },
];

@Component({
  selector: 'app-search-waste-collect-req',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './search-waste-collect-req.html',
  styleUrl: './search-waste-collect-req.css',
})
export class SearchWasteCollectReq {
  displayedColumns: string[] = ['position', 'requestDate', 'name', 'port', 'shipVoyage', 'wastes', 'wasteCollectionDate', 'wasteCollectionLocation', 'actions'];
  dataSource = ELEMENT_DATA;

  readonly addClicked = output<void>();
  readonly searchClicked = output<void>();
  readonly reviewClicked = output<PeriodicElement>();

  protected onAddClick(): void {
    this.addClicked.emit();
  }

  protected onSearchClick(): void {
    this.searchClicked.emit();
  }

  protected openReviewWasteCollectReq(row: PeriodicElement): void {
    this.reviewClicked.emit(row);
  }
}
