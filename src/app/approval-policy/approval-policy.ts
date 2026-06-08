import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

export interface ApprovalPolicyModel {
  name: string;
}
 
interface ApprovalStepElement {
  position: number;
  type: string;
  name: string;
  order: number;
  group: string;
  actions: string;
}

const APPROVAL_STEP_DATA: ApprovalStepElement[] = [
  { position: 1, type: 'إدارة', name: 'إدارة البيئة', order: 1.1, group: '', actions: 'edit' },
  { position: 2, type: 'جهة', name: 'هيئة السلامة', order: 2, group: '1', actions: 'edit' },
  { position: 3, type: 'إدارة', name: 'الإدارة المالية', order: 1, group: '', actions: 'edit' },
];

@Component({
  selector: 'app-approval-policy',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './approval-policy.html',
  styleUrl: './approval-policy.css',
})
export class ApprovalPolicy {
  displayedColumns: string[] = ['position', 'type', 'name', 'order', 'group', 'actions'];
  dataSource = APPROVAL_STEP_DATA;

  readonly saveClicked = output<void>();

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }
}
