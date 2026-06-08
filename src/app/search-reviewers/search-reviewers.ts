import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'اتفاقية ماربول (MARPOL)', actions: 'edit'},
  { position: 2, name: 'وكالة حماية البيئة الأمريكية (EPA)', actions: 'edit'},
  { position: 3, name: 'المنظمة البحرية الدولية (IMO)', actions: 'edit'},
  { position: 4, name: 'الهيئة الاقتصادية لقناة السويس (SCZone)', actions: 'edit'},
];

@Component({
  selector: 'app-search-reviewers',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-reviewers.html',
  styleUrl: './search-reviewers.css',
})
export class SearchReviewers {
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
