import { Component, output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'سياسة اعتماد طلبات جمع النفايات', actions: 'edit' },
  { position: 2, name: 'سياسة اعتماد طلبات التخلص الآمن', actions: 'edit' },
  { position: 3, name: 'سياسة اعتماد طلبات إعادة الشيء لأصله', actions: 'edit' },
];

@Component({
  selector: 'app-search-approval-policy',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './search-approval-policy.html',
  styleUrl: './search-approval-policy.css',
})
export class SearchApprovalPolicy {
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
