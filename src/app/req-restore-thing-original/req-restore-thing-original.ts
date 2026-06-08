import { Component, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface RestoreActionRow {
  position: number;
  name: string;
  actions: string;

}

const RESTORE_ACTION_DATA: RestoreActionRow[] = [
  {    position: 1,    name: 'نشر حواجز عزل',    actions: 'edit',  },
  {    position: 2,    name: 'شفط البقعة',    actions: 'edit',  },
  {    position: 3,    name: 'تنظيف السطح',    actions: 'edit',  },
];

@Component({
  selector: 'app-req-restore-thing-original',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './req-restore-thing-original.html',
  styleUrl: './req-restore-thing-original.css',
})
export class ReqRestoreThingOriginal {
  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();

  readonly attachmentsDisplayedColumns: string[] = [
    'position',
    'name',
    'actions',
  ];
  readonly attachmentsDataSource = RESTORE_ACTION_DATA;

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }
}
