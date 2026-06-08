import { Component, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface FollowImplWasteActionRow {
  position: number;
  name: string;
  actions: string;
}

const FOLLOW_IMPL_WASTE_ACTION_DATA: FollowImplWasteActionRow[] = [
  { position: 1, name: 'نشر حواجز عزل', actions: 'edit' },
  { position: 2, name: 'شفط البقعة', actions: 'edit' },
  { position: 3, name: 'تنظيف السطح', actions: 'edit' },
];

@Component({
  selector: 'app-follow-impl-waste',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './follow-impl-waste.html',
  styleUrl: './follow-impl-waste.css',
})
export class FollowImplWaste {
  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();

  readonly attachmentsDisplayedColumns: string[] = ['position', 'name', 'actions'];
  readonly attachmentsDataSource = FOLLOW_IMPL_WASTE_ACTION_DATA;

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}
