import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface OwnerModel {
  name: string;
}

interface OwnerLicenseRow {
  position: number;
  fromDate: string;
  toDate: string;
  licenseNumber: string;
}

const OWNER_LICENSE_DATA: OwnerLicenseRow[] = [
  { position: 1, fromDate: '2026-01-01', toDate: '2026-12-31', licenseNumber: 'LIC-1001' },
  { position: 2, fromDate: '2026-01-01', toDate: '2027-12-31', licenseNumber: 'LIC-1002' },
];

@Component({
  selector: 'app-owners',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './owners.html',
  styleUrl: './owners.css',
})
export class Owners {
  readonly saveClicked = output<void>();
  protected readonly displayedColumns: string[] = ['position', 'fromDate', 'toDate', 'licenseNumber', 'actions'];
  protected readonly dataSource: OwnerLicenseRow[] = OWNER_LICENSE_DATA;

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }
}
