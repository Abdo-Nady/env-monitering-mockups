import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

export interface ReviewWasteCollectReqElement {
  position: number;
  name: string;
  quantity: number;
  unit: string;
  company: string;
  actions: string;
}

const REVIEW_WASTE_COLLECT_REQ_DATA: ReviewWasteCollectReqElement[] = [
  { position: 1, name: 'نفايات صلبة', quantity: 1000, unit: 'كجم', company: 'شركة 1', actions: 'edit' },
  { position: 2, name: 'نفايات سائلة', quantity: 2000, unit: 'لتر', company: 'شركة 2', actions: 'edit' },
];

interface ReviewAttachmentElement {
  position: number;
  wasteType: string;
  entity: string;
  fileName: string;
  fileType: string;
  uploadedBy: string;
  actions: string;
}

const REVIEW_ATTACHMENTS_DATA: ReviewAttachmentElement[] = [
  {
    position: 1,
    wasteType: 'نفايات صلبة',
    entity: 'هيئة السلامة و إدارة البيئة',
    fileName: 'report-01.pdf',
    fileType: 'PDF',
    uploadedBy: '',
    actions: 'edit',
  },
  {
    position: 2,
    wasteType: 'نفايات سائلة',
    entity: 'إدارة البيئة',
    fileName: 'photo-incident.jpg',
    fileType: 'JPG',
    uploadedBy: '',
    actions: 'edit',
  },
];

@Component({
  selector: 'app-review-waste-collect-req',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTableModule],
  templateUrl: './review-waste-collect-req.html',
  styleUrl: './review-waste-collect-req.css',
})
export class ReviewWasteCollectReq {
  selectedTab: 'wastes' | 'attachments' = 'wastes';
  displayedColumns: string[] = ['position', 'name', 'quantity', 'unit', 'company'];
  dataSource = REVIEW_WASTE_COLLECT_REQ_DATA;
  attachmentsDisplayedColumns: string[] = [
    'position',
    'wasteType',
    'entity',
    'fileName',
    'fileType',
    'uploadedBy',
    'actions',
  ];
  attachmentsDataSource = REVIEW_ATTACHMENTS_DATA;

  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();
  selectedType: 'measurable' | 'event' = 'event';
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['O2', 'CO2', 'CO1'];

  protected onTypeChange(event: MatRadioChange): void {
    this.selectedType = event.value as 'measurable' | 'event';
  }

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}
