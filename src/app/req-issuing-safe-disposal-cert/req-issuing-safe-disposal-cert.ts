import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

interface CertActionRow {
  position: number;
  name: string;
  actions: string;
}

interface WasteRow {
  position: number;
  name: string;
  quantity: number;
  unit: string;
  actions: string;
}

interface AttachmentElement {
  position: number;
  wasteType: string;
  entity : string;
  fileName: string;
  fileType: string;
  uploadedBy: string;
  actions: string;
}

interface TruckVisitRow {
  position: number;
  truckNumber: string;
  entryDateTime: string;
  exitDateTime: string;
  weight: number;
}

interface CollectionStartEndRow {
  position: number;
  startDateTime: string;
  endDateTime: string;
}

const ATTACHMENTS_DATA: AttachmentElement[] = [
  { position: 1, wasteType: 'صور أثناء التحميل/الشفط', entity: 'الصور المرفقة أثناء التحميل/الشفط',
     fileName: 'report-01.pdf', fileType: 'PDF', uploadedBy: '', actions: 'edit' },
     { position: 2, wasteType: 'صور قبل/بعد التنظيف', entity: 'الصور المرفقة أثناء التنظيف',
      fileName: 'photo-incident.jpg', fileType: 'JPG', uploadedBy: '', actions: 'edit' }
    ];


const WASTE_DATA: WasteRow[] = [
  { position: 1, name: 'نفايات صلبة', quantity: 1200, unit: 'كجم', actions: 'edit' },
  { position: 2, name: 'نفايات سائلة', quantity: 3500, unit: 'لتر', actions: 'edit' },
];

const CERT_ACTION_DATA: CertActionRow[] = [
  { position: 1, name: 'مراجعة مستندات التخلص', actions: 'edit' },
  { position: 2, name: 'اعتماد الجهة المنفذة', actions: 'edit' },
  { position: 3, name: 'إصدار الشهادة النهائية', actions: 'edit' },
];

const TRUCKS_DATA: TruckVisitRow[] = [
  { position: 1, truckNumber: 'س ج ل 2026', entryDateTime: '2026-04-22 12:00', exitDateTime: '2026-04-22 14:00', weight: 1000 },
  { position: 2, truckNumber: 'س ك ل 8521', entryDateTime: '2026-04-22 12:00', exitDateTime: '2026-04-22 14:00', weight: 2000 },
];

const COLLECTION_START_END_DATA: CollectionStartEndRow[] = [
  { position: 1, startDateTime: '2026-04-22 12:00', endDateTime: '2026-04-22 14:00' },
  { position: 2, startDateTime: '2026-04-22 12:00', endDateTime: '2026-04-22 14:00' },
];

@Component({
  selector: 'app-req-issuing-safe-disposal-cert',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './req-issuing-safe-disposal-cert.html',
  styleUrl: './req-issuing-safe-disposal-cert.css',
})
export class ReqIssuingSafeDisposalCert {
  selectedTab: 'wastes' | 'attachments' | 'trucks' | 'collection-start-end' = 'wastes';
  readonly displayedColumns: string[] = ['position', 'name', 'quantity', 'unit', 'actions'];
  readonly dataSource = WASTE_DATA;
  readonly attachmentsDataSource = ATTACHMENTS_DATA;
  readonly trucksDataSource = TRUCKS_DATA;
  readonly trucksDisplayedColumns: string[] = ['position', 'truckNumber', 'entryDateTime', 'exitDateTime', 'weight'];
  readonly collectionStartEndDisplayedColumns: string[] = ['position', 'startDateTime', 'endDateTime'];
  readonly collectionStartEndDataSource = COLLECTION_START_END_DATA;
  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();

  readonly attachmentsDisplayedColumns: string[] = ['position', 'wasteType' , 'entity' , 'fileName' , 'actions'];

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}
