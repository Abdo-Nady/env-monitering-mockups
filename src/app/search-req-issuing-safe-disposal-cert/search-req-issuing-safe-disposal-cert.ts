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
    position: 1, name: 'شركة أليكس للخدمات البيئية المتكاملة', actions: 'edit', port: 'ميناء 1',
    shipVoyage: 'تاريخ الطلب 01-04-2026 - شركة ميرسك مصر', wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'مسودة', wastes: '2026-04-21 12:00',
  },
  {
    position: 2, name: 'شركة سي آر تي لإعادة التدوير والمعالجة', actions: 'edit', port: 'ميناء 2',
    shipVoyage: 'تاريخ الطلب 02-04-2026 - شركة سي إم آي - سي جي إم', wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'جارى المتابعة', wastes: '2026-04-22 12:00',
  },
  {
    position: 3, name: 'أكوامنت لتكنولوجيا المياه والبيئة', actions: 'edit', port: 'ميناء 3',
    shipVoyage: 'تاريخ الطلب 03-04-2026 - شركة أوشن نتورك إكسبريس', wasteCollectionDate: '2026-04-22',
    wasteCollectionLocation: 'مكتمل', wastes: '2026-04-23 12:00',
  },
];

@Component({
  selector: 'app-search-req-issuing-safe-disposal-cert',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-req-issuing-safe-disposal-cert.html',
  styleUrl: './search-req-issuing-safe-disposal-cert.css',
})
export class SearchReqIssuingSafeDisposalCert {
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
