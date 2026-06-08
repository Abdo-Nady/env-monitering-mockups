import { Component, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface RecordStartEndWorkActionRow {
  position: number;
  fromDateTime: string;
  toDateTime: string;
  notes: string;
  actions: string;
}

const RECORD_START_END_WORK_ACTION_DATA: RecordStartEndWorkActionRow[] = [
  { position: 1, fromDateTime: '2026-04-22 08:00', toDateTime: '2026-04-22 10:00', notes: 'تم جمع النفايات الصلبة', actions: 'edit' },
  { position: 2, fromDateTime: '2026-04-22 10:00', toDateTime: '2026-04-22 12:00', notes: 'تم جمع النفايات السائلة', actions: 'edit' },
  { position: 3, fromDateTime: '2026-04-22 12:00', toDateTime: '2026-04-22 14:00', notes: 'تم جمع النفايات الخطرة', actions: 'edit' },
];

@Component({
  selector: 'app-record-start-end-work',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './record-start-end-work.html',
  styleUrl: './record-start-end-work.css',
})
export class RecordStartEndWork {
  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();

  readonly attachmentsDisplayedColumns: string[] = ['position', 'fromDateTime', 'toDateTime', 'notes', 'actions'];
  readonly attachmentsDataSource = RECORD_START_END_WORK_ACTION_DATA;

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}
