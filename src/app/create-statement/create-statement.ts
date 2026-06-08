import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

interface DeviceOption {
  id: string;
  name: string;
  desc?: string;
}

interface StationOption {
  id: string;
  name: string;
  desc?: string;
}

interface CommitteeMember {
  position: number;
  name: string;
  department: string;
  type: string;
  opinion: string;
  
}interface CommitteeMember {
  position: number;
  name: string;
  department: string;
  type: string;
  opinion: string;
  
}
interface EstimateItem {
  position: number;
  name: string;
  value: number;
  currency: string;
  description: string;
  
}
@Component({
  selector: 'app-create-statement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatTableModule],
  templateUrl: './create-statement.html',
  styleUrl: './create-statement.css',
})
export class CreateStatement {
  selectedTab: 'committee' | 'estimate' = 'committee';
  sourceValue: 'device' | 'station' | 'report' = 'report';

  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();
  selectedType: 'device' | 'station' | 'report' = 'report';
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['O2', 'CO2', 'CO1'];
  protected devicesDropdownOpen = false;
  protected selectedDevice: DeviceOption | null = null;
  protected readonly devices: DeviceOption[] = [
    { id: '1234567890', name: 'جهاز جودة الهواء', desc: 'رصيف 1 بيتا 52' },
    { id: '1234567891', name: 'جهاز درجة الحرارة', desc: 'بوابة خروج رقم 27' },
    { id: '1234567892', name: 'جهاز درجة الرطوبة', desc: 'ساحة رقم 10' },
  ];
  protected stationsDropdownOpen = false;
  protected selectedStation: StationOption | null = null;
  protected readonly stations: StationOption[] = [
    { id: 'ST-001', name: 'محطة الأرصد الجوية', desc: 'بورسعيد' },
    { id: 'ST-002', name: 'محطة الأرصد الجوية', desc: 'البحر الأحمر' },
    { id: 'ST-003', name: 'محطة الأرصد الجوية', desc: 'شمال سيناء' },
  ];
  protected readonly displayedColumns: string[] = ['position', 'name', 'department', 'type', 'opinion', 'actions'];
  protected readonly dataSource: CommitteeMember[] = [
    { position: 1, name: 'أحمد محمد', department: 'الإدارة العامة للبيئة', type: 'رئيس اللجنة', opinion: 'قبطان السفينة لم يتبع تعليمات الرسو' },
    { position: 2, name: 'منى علي', department: 'إدارة السلامة', type: 'عضو', opinion: 'قبطان السفينة لم يتبع تعليمات السلامة' },
    { position: 3, name: 'خالد حسن', department: 'الإدارة القانونية', type: 'عضو', opinion: 'يوجد تجاوز من قبطان السفينة' },
  ];
  

  protected readonly estimateItemColumns: string[] = ['position', 'name', 'value', 'currency', 'description', 'actions'];
  protected readonly estimateItemDataSource: EstimateItem[] = [
    { position: 1, name: 'إزالة النفايات', value: 1000, currency: 'ج.م', description: 'تكلفة إزالة النفايات' },
    { position: 2, name: 'تجهيز الإصلاح', value: 2000, currency: 'دولار', description: 'تكلفة تجهيز الإصلاح' },
    { position: 3, name: 'إعادة الوضع لأصلة', value: 3000, currency: 'ج.م', description: 'تكلفة إعادة الوضع لأصلة' },
  ];

  protected onTypeChange(event: MatRadioChange): void {
    this.selectedType = event.value as 'device' | 'station' | 'report';
    this.sourceValue = this.selectedType;
  }

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }

  protected selectDevice(device: DeviceOption): void {
    this.selectedDevice = device;
  }

  protected selectStation(station: StationOption): void {
    this.selectedStation = station;
  }
}
